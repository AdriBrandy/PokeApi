import { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import AboutPokemon from "./sections/AboutPokemon";
import Characters from "./sections/Characters";
import PokeList from "./components/PokeList"

const App = () => {
  const [language, setLanguage] = useState("es");

  return (
    <>
      <NavBar setLanguage={setLanguage} language={language} />
      <Hero language={language} />
      <AboutPokemon language={language} />
      <Characters language={language} />
      <PokeList language={language}/>
      <Footer language={language} />
    </>
  );
};

export default App;
