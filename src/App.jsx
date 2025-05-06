import { useState } from "react";
import NavBar from "./components/NavBar"
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";



const App = () => {
  const [language, setLanguage] = useState("es");

  return (
    <>
      <NavBar setLanguage={setLanguage} language={language} />
      <Hero language={language} />
      <Footer language={language} />

    </>
  );
};

export default App;
