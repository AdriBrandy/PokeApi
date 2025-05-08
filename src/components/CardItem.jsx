import React, { useEffect, useState } from "react";
import {
  MagnifyingGlassIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

const CardItem = () => {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemon, setPokemon] = useState(null);
  const [pokemonImage, setPokemonImage] = useState(null); // Estado para la imagen

  // Función para cargar la imagen con caché en localStorage
  const loadPokemonImage = (id) => {
    const cachedImage = localStorage.getItem(`pokemonImage_${id}`);
    if (cachedImage) {
      return Promise.resolve(cachedImage);
    }

    return fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`)
      .then((res) => res.blob())
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        localStorage.setItem(`pokemonImage_${id}`, imageUrl); // Guarda la imagen en caché
        return imageUrl;
      });
  };

  // useEffect para cargar los datos del Pokémon
  useEffect(() => {
    fetch(`/api/pokemon/${pokemonId}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.error("Error al cargar el Pokémon:", err));

    // Cargar la imagen usando el caché
    loadPokemonImage(pokemonId)
      .then((imageUrl) => {
        setPokemonImage(imageUrl);
      })
      .catch((err) => console.error("Error al cargar la imagen", err));
  }, [pokemonId]);

  const handlePrev = () => {
    setPokemonId((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleNext = () => {
    setPokemonId((prev) => (prev < 151 ? prev + 1 : 151));
  };

  return (
    <div className="relative w-[350px] shadow-xl rounded-2xl overflow-hidden">
      <img
        src="/images/pokedex-copia.png"
        alt="card"
        className="rounded-2xl w-full h-auto object-contain"
      />

      {pokemon && pokemonImage && (
        <>
          <div className="absolute top-[60%] left-[19%] text-black text-[1rem] font-semibold italic bg-slate-200 w-53 text-center py-1.5 rounded-xl">
            <p>
              #{String(pokemon.id).padStart(3, "0")}{" "}
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </p>
          </div>
          <img
            src={pokemonImage} // Usamos la URL de la imagen que está en el estado
            alt={pokemon.name}
            loading="lazy"
            className="absolute top-[35%] left-[35%] w-[100px]"
          />
        </>
      )}

      <input
        className="absolute rounded-xl w-40 py-4 text-black px-2 bg-emerald-300 top-[80%] left-[12%] placeholder-black hover:bg-emerald-500"
        type="text"
        placeholder="Nombre o ID"
        disabled
      />

      <button
        type="button"
        onClick={handlePrev}
        className="absolute top-[79%] left-[62%] hover:bg-slate-700"
      >
        <ArrowLeftIcon className="w-4 h-4 text-white" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="absolute top-[79%] left-[75%] hover:bg-slate-700"
      >
        <ArrowRightIcon className="w-4 h-4 text-white" />
      </button>
    </div>
  );
};

export default CardItem;
