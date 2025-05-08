import React from "react";
import { characters } from "../constants";

const CharacterCard = ({ language = "es" }) => {
  const list = characters[language] || characters.en;

  return (
    <div className="">
      <div className="px-4 py-10 w-full flex flex-col items-center gap-10">
        {list.map((character, index) => (
          <div
            key={index}
            className="bg-white flex flex-col lg:flex-row max-w-5xl shadow-lg rounded-lg overflow-hidden"
          >
            <div
              className="lg:w-1/2 h-64 lg:h-auto bg-cover bg-center"
              style={{ backgroundImage: `url(${character.img})` }}
            />
            <div className="p-6 lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {character.title}
              </h2>
              <h3 className="text-amber-500 text-xl font-semibold mb-4">
                {character.sub}
              </h3>
              <p className="text-gray-600">{character.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterCard;
