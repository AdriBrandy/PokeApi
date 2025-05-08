import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import TitleHeader from "./TitleHeader";

const titulos = {
  en: {
    title: "Discovering the Pokedex",
    sub: "Everything you need to know about pokémons",
  },
  es: {
    title: "Descubriendo la Pokedex",
    sub: "Todo lo que necesitas saber de los pokémons",
  },
};

const PokeList = ({ language }) => {
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const { title, sub } = titulos[language] || titulos["es"];
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const promises = [];

        for (let i = 1; i <= 151; i++) {
          promises.push(fetch(`${backendURL}/api/pokemon/${i}`).then(res => res.json()));
        }

        const results = await Promise.all(promises);

        const typeTranslations = {};
        const abilityTranslations = {};

        for (const pokemon of results) {
          for (const typeObj of pokemon.types) {
            const typeUrl = typeObj.type.url;
            if (!typeTranslations[typeUrl]) {
              const typeData = await fetch(typeUrl).then(res => res.json());
              const es = typeData.names.find(n => n.language.name === "es")?.name || typeObj.type.name;
              const en = typeData.names.find(n => n.language.name === "en")?.name || typeObj.type.name;
              typeTranslations[typeUrl] = { es, en };
            }
          }

          for (const ability of pokemon.abilities) {
            const abilityUrl = ability.ability.url;
            if (!abilityTranslations[abilityUrl]) {
              const abilityData = await fetch(abilityUrl).then(res => res.json());
              const es = abilityData.names.find(n => n.language.name === "es")?.name || ability.ability.name;
              const en = abilityData.names.find(n => n.language.name === "en")?.name || ability.ability.name;
              abilityTranslations[abilityUrl] = { es, en };
            }
          }
        }

        const cards = results.map((data) => {
          const types = data.types.map(t => {
            const url = t.type.url;
            return typeTranslations[url] || { es: t.type.name, en: t.type.name };
          });

          const abilities = data.abilities.map((a) => {
            const url = a.ability.url;
            return abilityTranslations[url] || { es: a.ability.name, en: a.ability.name };
          });

          return {
            id: data.id,
            name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
            types,
            hp: data.hp,
            abilities,
          };
        });

        console.log("Cards creadas:", cards);
        setPokemonList(cards);
        setFilteredList(cards);
      } catch (err) {
        console.error("Error al obtener pokémons:", err);
      }
    };

    fetchPokemons();
  }, [backendURL]);

  useEffect(() => {
    const filtered = pokemonList.filter(poke => {
      const matchName = poke.name.toLowerCase().includes(searchName.toLowerCase());
      const matchType = filterType
        ? poke.types.some(t => t[language]?.toLowerCase() === filterType.toLowerCase())
        : true;
      return matchName && matchType;
    });

    setFilteredList(filtered);
  }, [searchName, filterType, pokemonList, language]);

  return (
    <div id="pokedex" className="mb-10 scroll-m-32">
      <TitleHeader title={title} sub={sub} />
      <div className="p-4 bg-black">
        <div className="flex flex-col sm:flex-row gap-2 mb-4 justify-center">
          <input
            type="text"
            placeholder={language === "es" ? "Buscar por nombre..." : "Search by name..."}
            className="p-2 rounded w-full sm:w-64 border-2 border-amber-500 bg-amber-900 placeholder:text-white"
            value={searchName}
            onChange={e => setSearchName(e.target.value)}
          />
          <select
            className="p-2 rounded w-full sm:w-64 border-2 border-amber-500 bg-amber-900"
            value={filterType}
            onChange={e => setFilterType(e.target.value)}
          >
            <option value="">{language === "es" ? "Todos los tipos" : "All types"}</option>
            {Array.from(
              new Set(pokemonList.flatMap(p => p.types.map(t => t[language])))
            )
              .sort()
              .map((type, i) => (
                <option key={i} value={type}>
                  {type}
                </option>
              ))}
          </select>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {filteredList.map((poke, index) => (
            <PokeCard key={index} {...poke} language={language} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokeList;
