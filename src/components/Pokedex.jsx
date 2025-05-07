
import React from "react";
import CardInfo from "./CardInfo";
import CardItem from "./CardItem";

const Pokedex = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col md:flex-row gap-0 items-center">
        <CardItem />
        <CardInfo />
      </div>
    </div>
  );
};

export default Pokedex;
