import React from "react";
import StoryPokemon from "../components/StoryPokemon";
import Experience from "../components/Experience";

const AboutPokemon = ({ language }) => {
  return (
    <section id="aboutPokemon" className="px-4 md:px-8 mb-10 scroll-m-32">
      {/* Contenedor en fila para Experience + StoryPokemon */}
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="w-full md:w-1/4 md:pr-4 hidden md:block">
          <Experience />
        </div>
        <div className="w-full md:w-3/5">
          <StoryPokemon language={language} />
        </div>
      </div>
      <div className="mt-2 mb-10 flex justify-center">
        <img
          src="https://i.pinimg.com/1200x/34/a5/54/34a554f4b24f9d93ffb6965b3aeff11e.jpg"
          alt="Pokémon"
          className="w-full max-w-4xl h-auto rounded-3xl shadow-lg shadow-amber-500"
        />
      </div>
    </section>
  );
};

export default AboutPokemon;

