const navLinks = {
  en: [
    { name: "About Pokémon", link: "#aboutPokemon" },
    { name: "Characters", link: "#characters" },
    { name: "Pokedex", link: "#pokedex" },
    // { name: "Experience", link: "#experience" },
    
  ],
  es: [
    { name: "Sobre Pokémon", link: "#aboutPokemon" },
    { name: "Personajes", link: "#characters" },
    { name: "Pokedex", link: "#pokedex" },
    // { name: "Experiencia", link: "#experience" },
    
  ],
};

const words = {
  en: [
    { text: "Pokémons", imgPath: "/images/logos/bulbasaur.png" },
    { text: "Adventures", imgPath: "/images/logos/eevee.png" },
    { text: "Battles", imgPath: "/images/logos/jigglypuff.png" },
    { text: "Friendships", imgPath: "/images/logos/togepi.png" },
    { text: "Pokémons", imgPath: "/images/logos/bulbasaur.png" },
    { text: "Adventures", imgPath: "/images/logos/eevee.png" },
    { text: "Battles", imgPath: "/images/logos/jigglypuff.png" },
    { text: "Friendships", imgPath: "/images/logos/togepi.png" },
  ],
  es: [
    { text: "Pokémons", imgPath: "/images/logos/bulbasaur.png" },
    { text: "Aventuras", imgPath: "/images/logos/eevee.png" },
    { text: "Batallas", imgPath: "/images/logos/jigglypuff.png" },
    { text: "Amistades", imgPath: "/images/logos/togepi.png" },
    { text: "Pokémons", imgPath: "/images/logos/bulbasaur.png" },
    { text: "Aventuras", imgPath: "/images/logos/eevee.png" },
    { text: "Batallas", imgPath: "/images/logos/jigglypuff.png" },
    { text: "Amistades", imgPath: "/images/logos/togepi.png" },
  ]
};

const socialImgs = [
  {
    name: "github",
    imgPath: "images/github.png",
    url:"https://github.com/AdriBrandy"
  },
  {
    name: "mail",
    imgPath: "/images/mail.png",
    url: "mailto:adriana_brandan22@outlook.com"
  },
  {
    name: "what",
    imgPath: "/images/whatsapp.png",
    url: "https://wa.me/5491164258475?text=Hola%20Brandy%2C%20vi%20tu%20portfolio%20y%20me%20encant%C3%B3.%20%C2%BFPodemos%20hablar%3F"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/adriana-brandan/"
  },
];
const translations = {
  en: {
    terms: "Terms & Conditions",
    copyright: "All rights reserved.",
  },
  es: {
    terms: "Términos y Condiciones",
    copyright: "Todos los derechos reservados.",
  },
};

const pokeIMG = [
    { alt: "bulbasaur", imgPath: "/images/logos/bulbasaur.png" },
    { alt: "Pokémons", imgPath: "/images/logos/chikorita.png" },
    { alt: "eevee", imgPath: "/images/logos/eevee.png" },
    { alt: "jigglypuff", imgPath: "/images/logos/jigglypuff.png" },
    { alt: "poliwag", imgPath: "/images/logos/poliwag.png" },
    { alt: "squirtle", imgPath: "/images/logos/squirtle.png" },
    { alt: "togepi", imgPath: "/images/logos/togepi.png" },
    { alt: "victini", imgPath: "/images/logos/victini.png" },
];
const characters = {
  en: [
    {
      title: "Ash Ketchum",
      sub: "The aspiring Pokémon Master",
      description:
        "Ash Ketchum is a passionate Pokémon Trainer from Pallet Town, aiming to become a Pokémon Master. Accompanied by his loyal Pikachu, he travels across various regions, participating in battles and making new friends.",
      img: "https://www.themarysue.com/wp-content/uploads/2023/03/Ash-Ketchum-Pokemon-anime.jpg",
    },
    {
      title: "Misty",
      sub: "The Cerulean City Gym Leader",
      description:
        "Misty is the Gym Leader of Cerulean City and specializes in Water-type Pokémon. Known for her fiery personality and dedication, she often travels with Ash and Brock during their early adventures.",
      img: "https://th.bing.com/th/id/OIP.SBfSNCY9LyAFW2kbIIlOyAHaEK?rs=1&pid=ImgDetMain",
    },
    {
      title: "Brock",
      sub: "The Pewter City Gym Leader",
      description:
        "Brock is the Gym Leader of Pewter City and an expert in Rock-type Pokémon. He is also known for his culinary skills and acts as a caretaker for his friends during their journeys.",
      img: "https://th.bing.com/th/id/R.de2346bf3835ec3451957b63001288af?rik=g7bBn9xAbj06cA&pid=ImgRaw&r=0",
    },
  ],
  es: [
    {
      title: "Ash Ketchum",
      sub: "El aspirante a Maestro Pokémon",
      description:
        "Ash Ketchum es un apasionado Entrenador Pokémon de Pueblo Paleta, que sueña con convertirse en un Maestro Pokémon. Acompañado por su leal Pikachu, viaja por diversas regiones, participando en batallas y haciendo nuevos amigos.",
      img: "https://www.themarysue.com/wp-content/uploads/2023/03/Ash-Ketchum-Pokemon-anime.jpg",
    },
    {
      title: "Misty",
      sub: "La Líder de Gimnasio de Ciudad Celeste",
      description:
        "Misty es la Líder de Gimnasio de Ciudad Celeste y se especializa en Pokémon de tipo Agua. Conocida por su personalidad enérgica y dedicación, a menudo viaja con Ash y Brock durante sus primeras aventuras.",
      img: "https://th.bing.com/th/id/OIP.SBfSNCY9LyAFW2kbIIlOyAHaEK?rs=1&pid=ImgDetMain",
    },
    {
      title: "Brock",
      sub: "El Líder de Gimnasio de Ciudad Plateada",
      description:
        "Brock es el Líder de Gimnasio de Ciudad Plateada y un experto en Pokémon de tipo Roca. También es conocido por sus habilidades culinarias y actúa como cuidador de sus amigos durante sus viajes.",
      img: "https://th.bing.com/th/id/R.de2346bf3835ec3451957b63001288af?rik=g7bBn9xAbj06cA&pid=ImgRaw&r=0",
    },
  ],
};




export {
  words,
  socialImgs,
  navLinks,
  translations,
  pokeIMG,
  characters

};
