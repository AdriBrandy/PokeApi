
// import React, { useEffect, useState } from "react";
// import {
//   MagnifyingGlassIcon,
//   ArrowLeftIcon,
//   ArrowRightIcon,
// } from "@heroicons/react/24/solid";

// const CardItem = () => {
//   const [pokemonId, setPokemonId] = useState(1);
//   const [pokemon, setPokemon] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:4000/api/pokemon/${pokemonId}")
//       .then((res) => res.json())
//       .then((data) => setPokemons(data))
//       .catch((err) => console.error("Error al cargar pokemons:", err));
//   }, []);
//   const getIdFromUrl = (url) => {
//     const parts = url.split("/").filter(Boolean);
//     return parts[parts.length - 1];
//   };

//   return (
//     <>
//       <div className="flex flex-wrap gap-4 justify-center">
//         {pokemons.map((poke) => {
          
//           const id = getIdFromUrl(poke.url);
//           const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

//           return (
//             <div className="relative w-[350px] shadow-xl rounded-2xl overflow-hidden">
//               <img
//                 src="/images/pokedex-copia.png"
//                 alt="card"
//                 className="rounded-2xl w-full h-auto object-contain"
//               />
//               <div className="absolute top-[60%] left-[19%] text-black text-[1rem] font-semibold italic bg-slate-200 px-12 py-1.5  rounded-xl">
//                 <p>#{id} {poke.name}</p>
//               </div>
//               <img
//                 src={imageUrl}
//                 className="absolute top-[35%] left-[35%] object-contain w-25"
//               />
//               <input
//                 className="absolute rounded-xl w-40 py-4 text-black px-2 bg-emerald-300 top-[80%] left-[12%] placeholder-black hover:bg-emerald-500"
//                 type="text"
//                 placeholder="Nombre o ID"
//               />
//               <button
//                 type="button"
//                 className="absolute top-[70%] left-[10%] rounded-4xl bg-black border-2 border-slate-500 py-2.5 px-3 hover:bg-slate-500 hover:border-sky-950"
//               >
//                 <MagnifyingGlassIcon className="w-4 h-4 text-white" />
//               </button>
//               <button className="absolute top-[79%] left-[62%] hover:bg-slate-700">
//                 <ArrowLeftIcon className="w-4 h-4 text-white" />
//               </button>
//               <button className="absolute top-[79%] left-[75%] hover:bg-slate-700">
//                 <ArrowRightIcon className="w-4 h-4 text-white" />
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default CardItem;
import React, { useEffect, useState } from "react";
import {
  MagnifyingGlassIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

const CardItem = () => {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon({
          id: data.id,
          name: data.name,
          image:
            data.sprites.other["official-artwork"].front_default, 
        });
      })
      .catch((err) => console.error("Error al cargar el Pokémon:", err));
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

      {pokemon && (
        <>
          <div className="absolute top-[60%] left-[19%] text-black text-[1rem] font-semibold italic bg-slate-200 w-53 text-center py-1.5 rounded-xl">
            <p>
              #{String(pokemon.id).padStart(3, "0")}{" "}
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </p>
          </div>
          <img
            src={pokemon.image}
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

