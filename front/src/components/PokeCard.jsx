import React from "react";
import styled from "styled-components";

const PokeCard = ({ id, name, types, hp, abilities, language = "es" }) => {
  
  return (
    <Styled>
      <div className="card-container animate-float ">
        <div className="card  max-w-60 sm:w-60 rounded-xl overflow-hidden">
          <div className="glow-effect"></div>
          <div className="rainbow-border"></div>
          <div className="relative bg-gradient-to-br from-orange-400 via-amber-500 to-rose-500 p-3 rounded-xl">
            <div className="shine-lines"></div>
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg font-bold text-white">{name}</h2>
              <div className="flex items-center gap-1">
                <span className="text-white font-bold ">HP:</span>
                <span className="text-white font-bold">{hp}</span>
              </div>
            </div>

            <div className="relative aspect-square mb-3 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-rose-200"></div>
              <div className="absolute inset-0 holo-effect animate-holo-glow"></div>
              <div className="absolute inset-0 card-shine"></div>
              <div className="absolute inset-0 sparkles"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 energy-symbol rounded-full animate-energy-spin opacity-20"></div>
              </div>
              <img
                src={`/pokemon_images/${id}.png`}
                alt={name}
                className="pokemon-image"
              />
            </div>

            <div className="bg-white/90 backdrop-blur rounded-lg p-1 space-y-3">
              <div className="flex items-center gap-2">
                <span className="type-fire max-w-18 text-white  px-1 rounded-2xl">
                  {types.map((t, i) => (
                    <span key={i}>
                      {t[language]}
                      {i < types.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </span>
                <div className="space-y-1">
                  <p className="text-xs text-black">Habilidades:</p>
                  <ul className="text-xs text-neutral-700 list-disc list-inside">
                    {abilities.map((ab, i) => (
                      <li key={i}>{ab[language]}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default PokeCard;

const Styled = styled.div`
  .card-container {
    perspective: 1000px;
    transform-style: preserve-3d;
  }

  .card {
    position: relative;
    transform-style: preserve-3d;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card:hover {
    transform: rotateY(10deg) rotateX(5deg) scale(1.05);
    filter: brightness(1.1);
  }

  .holo-effect {
    background: linear-gradient(
      125deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 10%,
      rgba(255, 255, 255, 0.6) 45%,
      rgba(255, 255, 255, 0.3) 90%,
      rgba(255, 255, 255, 0) 100%
    );
    mix-blend-mode: overlay;
  }

  .energy-symbol {
    background: conic-gradient(from 0deg, #ff8a00, #e52e71, #ff8a00);
    filter: blur(1px);
  }

  .card-shine {
    background: linear-gradient(
      125deg,
      transparent 0%,
      rgba(255, 255, 255, 0.3) 25%,
      transparent 50%
    );
  }

  .sparkles::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
        circle at 20% 30%,
        white 0%,
        transparent 2%
      ),
      radial-gradient(circle at 80% 20%, white 0%, transparent 2%),
      radial-gradient(circle at 40% 70%, white 0%, transparent 2%),
      radial-gradient(circle at 70% 50%, white 0%, transparent 2%),
      radial-gradient(circle at 60% 30%, white 0%, transparent 2%),
      radial-gradient(circle at 30% 40%, white 0%, transparent 2%),
      radial-gradient(circle at 90% 60%, white 0%, transparent 2%);
    opacity: 0;
    animation: sparkle 4s ease-in-out infinite;
  }

  .type-fire {
    background: linear-gradient(45deg, #ff8a00, #e52e71);
    animation: rainbow 6s linear infinite;
  }

  .rainbow-border {
    position: absolute;
    inset: -2px;
    background: linear-gradient(45deg, #ff8a00, #e52e71, #ff8a00, #e52e71);
    background-size: 200% 200%;
    animation: shine 4s linear infinite;
    border-radius: 1rem;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .card:hover .rainbow-border {
    opacity: 1;
  }

  .glow-effect {
    position: absolute;
    inset: -20px;
    background: radial-gradient(
      circle at center,
      rgba(255, 138, 0, 0.3),
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .card:hover .glow-effect {
    opacity: 1;
    animation: pulse-glow 2s ease-in-out infinite;
  }

  .shine-lines {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(255, 255, 255, 0.1) 10px,
      rgba(255, 255, 255, 0.1) 20px
    );
    animation: tilt-shine 1.5s ease-in-out infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .card:hover .shine-lines {
    opacity: 1;
  }

  .pokemon-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 10;
    transform-style: preserve-3d;
    transition: transform 0.3s ease;
    filter: drop-shadow(0 0 10px rgba(255, 138, 0, 0.3));
  }

  .card:hover .pokemon-image {
    transform: scale(1.1) translateZ(20px);
    filter: drop-shadow(0 0 20px rgba(255, 138, 0, 0.5));
  }
`;
