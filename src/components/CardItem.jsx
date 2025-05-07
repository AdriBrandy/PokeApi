
import React from "react";
import {
  MagnifyingGlassIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

const CardItem = () => {
  return (
    <div className="relative w-[350px] shadow-xl rounded-2xl overflow-hidden">
      <img
        src="/images/pokedex-copia.png"
        alt="card"
        className="rounded-2xl w-full h-auto object-contain"
      />
      <div className="absolute top-[60%] left-[20%] text-black text-lg font-semibold italic bg-slate-200 px-10 py-1 rounded-xl">
        <p>#005 Squirtle</p>
      </div>
      <img
        src="/images/logos/bulbasaur.png"
        className="absolute top-[35%] left-[35%]"
      />
      <input
        className="absolute rounded-xl w-40 py-4 text-black px-2 bg-emerald-300 top-[80%] left-[12%] placeholder-black hover:bg-emerald-500"
        type="text"
        placeholder="Nombre o ID"
      />
      <button
        type="button"
        className="absolute top-[70%] left-[10%] rounded-4xl bg-black border-2 border-slate-500 py-2.5 px-3 hover:bg-slate-500 hover:border-sky-950"
      >
        <MagnifyingGlassIcon className="w-4 h-4 text-white" />
      </button>
      <button className="absolute top-[79%] left-[62%] hover:bg-slate-700">
        <ArrowLeftIcon className="w-4 h-4 text-white" />
      </button>
      <button className="absolute top-[79%] left-[75%] hover:bg-slate-700">
        <ArrowRightIcon className="w-4 h-4 text-white" />
      </button>
    </div>
  );
};

export default CardItem;

