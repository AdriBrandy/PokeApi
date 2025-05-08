import React from "react";
import CardInfo from "./CardInfo";
import CardItem from "./CardItem";
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

const Pokedex = ({ language = "es" }) => {
  const { title, sub } = titulos[language] || titulos["es"];
  return (
    <>
      <div id="pokedex" className=" mb-10 scroll-m-32">
        <TitleHeader title={title} sub={sub} />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col md:flex-row gap-0 items-center">
          <CardItem />
          <CardInfo />
        </div>
      </div>
    </>
  );
};

export default Pokedex;
