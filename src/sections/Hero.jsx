import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../components/Button";
import HeroExperience from "../components/models/hero_models/HeroExperience";
import { words as wordsByLanguage } from "../constants/index";

const Hero = ({ language = "es" }) => {
  const words = wordsByLanguage[language];
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  const buttonText = {
    en: "Pokedex",
    es: "Pokedex",
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10 ">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout ">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>{language === "es" ? "Coleccionando " : "Collecting"}</h1>
            </div>
            <div className="hero-text">
              <span className="slide">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center md:gap-3 gap-1 pb-2"
                    >
                      <img
                        src={word.imgPath}
                        alt="icon"
                        className="xl:size-14 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50 object-fit"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </div>
            <div className="hero-text">
              <h1>
                {language === "es"
                  ? "del mundo Pokémon"
                  : "from the Pokémon world"}
              </h1>
            </div>
            <div className="hidden md:flex flex-wrap gap-4">
              <Button
                text={language === "es" ? "Sobre Pokémon" : "About Pokémon"}
                className="md:w-80 md:h-16 w-60 h-12 "
                id="aboutpokemon"
              />
              <Button
                text={buttonText[language]}
                className="md:w-80 md:h-16 w-60 h-12"
                id="pokedex"
              />
            </div>
            
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
