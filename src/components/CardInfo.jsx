
import React from "react";

const CardInfo = () => {
  return (
    <div className="bg-red-600 relative w-[350px] shadow-xl rounded-2xl overflow-hidden">
      <img
        src="/images/poke-info.png"
        alt="card"
        className="rounded-2xl w-full h-auto object-contain"
      />
      <img
        src="/images/pokedex-info.png"
        alt="card"
        className="rounded-b-2xl w-full h-46 "
      />
      <div className="absolute top-[17%] left-[10%]">
        <img src="/images/logos/bulbasaur.png" />
      </div>
      <div className="flex absolute top-[7%] left-[47%] font-semibold text-white space-x-2">
        <span>#000</span>
        <p>#Bulbasaur</p>
      </div>
      
      <div className="absolute top-[12%] left-[45%] text-black font-mono">
        <span>Bulbasaur</span>
      </div>
      <div className="absolute top-[19.5%] left-[58%] text-black font-mono">
        <span>Normal</span>
      </div>
      <div className="absolute top-[19.5%] left-[78%] text-black font-mono">
        <span>Normal</span>
      </div>
      <div className="absolute top-[27%] left-[58%] text-black font-mono">
        <span>Peso:</span>
      </div>
      <div className="absolute top-[32%] left-[58%] text-black font-mono">
        <span>Altura:</span>
      </div>
      <div className="absolute top-[43%] left-[10%] text-black font-mono max-w-[290px]">
        <p>Este Pokémon...</p>
      </div>
      
    </div>
  );
};

export default CardInfo;
