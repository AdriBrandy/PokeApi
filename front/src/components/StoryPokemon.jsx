import React from "react";
import TitleHeader from "./TitleHeader";

const texts = {
  es: {
    title: "Sobre Pokémon",
    subtitle: "La historia detrás de un mundo maravilloso",
    content: (
      <>
        <p className="mb-4">
          <strong>Pokémon</strong> (abreviatura de <em>Pocket Monsters</em>)
          nació en Japón en 1996 como videojuego para Game Boy, creado por{" "}
          <strong>Satoshi Tajiri</strong> e inspirado en su infancia
          recolectando insectos. Desde entonces, se ha convertido en una de las
          franquicias más grandes del mundo.
        </p>
        <p className="mb-4">
          A lo largo de los años, Pokémon se expandió en videojuegos, series
          animadas, películas, cartas, juguetes y mucho más. Su lema:{" "}
          <em>¡Hazte con todos!</em>
        </p>
        <h3 className="text-lg font-semibold mt-4">📺 El anime</h3>
        <p className="mb-4">
          La serie animada comenzó en 1997 con <strong>Ash Ketchum</strong> y su
          inseparable <strong>Pikachu</strong>. Ash recorre regiones como Kanto,
          Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, Galar y Paldea. En 2023, su
          historia concluye y comienza una nueva era con <strong>Liko</strong> y{" "}
          <strong>Roy</strong> en <em>Pokémon Horizons</em>.
        </p>
        <h3 className="text-lg font-semibold mt-4">🌍 El mundo Pokémon</h3>
        <p className="mb-4">
          Existen más de <strong>1000 Pokémon</strong>, organizados por
          generaciones. Cada uno tiene habilidades y tipos (agua, fuego,
          eléctrico, etc.), y puede evolucionar o formar vínculos con
          entrenadores.
        </p>
        <h3 className="text-lg font-semibold mt-4">💡 Legado</h3>
        <p>
          Pokémon promueve la amistad, la perseverancia, el respeto por la
          naturaleza y la aventura. Es mucho más que un juego: es un universo
          que sigue creciendo.
        </p>
      </>
    ),
  },
  en: {
    title: "About Pokémon",
    subtitle: "The story behind an amazing world",
    content: (
      <>
        <p className="mb-4">
          <strong>Pokémon</strong> (short for <em>Pocket Monsters</em>) was born
          in Japan in 1996 as a Game Boy video game created by{" "}
          <strong>Satoshi Tajiri</strong>, inspired by his childhood collecting
          bugs. Since then, it became one of the largest franchises in the
          world.
        </p>
        <p className="mb-4">
          Over the years, Pokémon expanded into video games, animated series,
          movies, trading cards, toys, and more. Its global slogan:{" "}
          <em>Gotta catch 'em all!</em>
        </p>
        <h3 className="text-lg font-semibold mt-4">📺 The Anime</h3>
        <p className="mb-4">
          The anime started in 1997 with <strong>Ash Ketchum</strong> and his
          loyal <strong>Pikachu</strong>. Ash traveled through regions like
          Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, Galar, and Paldea.
          In 2023, his journey ended, and a new era began with{" "}
          <strong>Liko</strong> and <strong>Roy</strong> in{" "}
          <em>Pokémon Horizons</em>.
        </p>
        <h3 className="text-lg font-semibold mt-4">🌍 The Pokémon World</h3>
        <p className="mb-4">
          There are over <strong>1000 Pokémon</strong>, organized by
          generations. Each has its own types (water, fire, electric, etc.),
          abilities, and potential to evolve or bond with trainers.
        </p>
        <h3 className="text-lg font-semibold mt-4">💡 Legacy</h3>
        <p>
          Pokémon promotes friendship, perseverance, respect for nature, and a
          spirit of adventure. It's more than just a game — it's a growing
          universe.
        </p>
      </>
    ),
  },
};

const StoryPokemon = ({ language = "es" }) => {
  const { content, title, subtitle } = texts[language] || texts["es"];

  return (
    <div className="px-4 md:px-6 w-full h-full text-white">
      <TitleHeader title={title} sub={subtitle} />
      <article className="mt-7 text-base leading-relaxed text-justify font-mono max-w-screen-lg mx-auto">
        {content}
      </article>
    </div>
  );
};

export default StoryPokemon;
