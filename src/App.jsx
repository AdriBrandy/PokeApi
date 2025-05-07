import { useState } from "react";
import NavBar from "./components/NavBar"
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import Pokedex from "./components/Pokedex";



const App = () => {
  const [language, setLanguage] = useState("es");

  return (
    <>
      <NavBar setLanguage={setLanguage} language={language} />
      <Hero language={language} />
      <Pokedex/>
      <Footer language={language} />

    </>
  );
};

export default App;
