import React from "react";
import CharacterCard from "../components/CharacterCard";
import TitleHeader from "../components/TitleHeader";

const titulos = {
  en: {
    title: "Main Characters",
    sub: "Meet your new best friends",
  },
  es: {
    title: "Personajes principales",
    sub: "Conocé tus nuevos mejores amigos",
  },
};

const Characters = ({ language = "es" }) => {
  const { title, sub } = titulos[language] || titulos["es"];
  return (
    <>
      <section id="characters" className="min-w-screen h-full flex flex-col scroll-m-32 mb-10">
        <div className="mt-7">
          <TitleHeader title={title} sub={sub} />
            <CharacterCard language={language} />
        </div>
      </section>
    </>
  );
};

export default Characters;
