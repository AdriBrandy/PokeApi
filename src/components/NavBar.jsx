import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import { Menu, X } from "lucide-react"; // íconos, podés cambiarlos por SVGs si querés

const NavBar = ({ language, setLanguage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner w-full flex items-center justify-between">
        <div className="flex">
          <img src="/images/logos/pokeball.png" className="max-w-8"></img>
          <a href="#hero" className="logo">
            PokeApi
          </a>
          <img src="/images/logos/pokeball.png" className="max-w-8"></img>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden z-50 text-white" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop nav */}
        <nav className="desktop">
          <ul>
            {navLinks[language].map(({ link, name }) => (
              <li key={name} className="group font-semibold text-xl">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact + Language buttons */}
        <div className="hidden lg:flex items-center gap-4">
          {/* <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>{language === "es" ? "Contáctame" : "Contact me"}</span>
            </div>
          </a> */}
          <div className="language-btns ">
            <button
              onClick={() => setLanguage("es")}
              className={`language-btn group ${
                language === "es" ? "active" : ""
              }`}
            >
              <div className="inner bg-gradient-to-tl via-amber-300 to-amber-700">
                <span className="font-semibold ">ES</span>
              </div>
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`language-btn group ${
                language === "en" ? "active" : ""
              }`}
            >
              <div className="inner bg-gradient-to-tl via-amber-300 to-amber-700">
                <span className="font-semibold">EN</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-black bg-opacity-95 flex flex-col items-center justify-center gap-10 z-40 transition-all">
          <ul className="text-xl space-y-6">
            {navLinks[language].map(({ link, name }) => (
              <li key={name}>
                <a href={link} onClick={() => setMenuOpen(false)}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
          {/* <a
            href="#contact"
            className="text-white text-lg underline"
            onClick={() => setMenuOpen(false)}
          >
            {language === "es" ? "Contáctame" : "Contact me"}
          </a> */}
          <div className="flex gap-4">
            <button
              onClick={() => setLanguage("es")}
              className={`text-white ${language === "es" && "underline"} `}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`text-white  ${language === "en" && "underline"} `}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
