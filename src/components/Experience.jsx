import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pokeIMG } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".exp-card-wrapper").forEach((card, i) => {
      gsap.fromTo(
        card,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top center+=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Línea de tiempo vertical
    gsap.to(".timeline", {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".exp-card-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: ".timeline-wrapper",
      },
    });
  });

  return (
    <div id="experience" className="max-w-30 h-full">
      <div className="mt-30 w-80 px-2">
        <div className=" absolute">
          <div className="relative z-50 xl:space-y-12 space-y-10">
            {pokeIMG.map((card) => (
              <div key={card.alt} className="exp-card-wrapper">
                <div className="xl:w-4/6"></div>
                <div className="xl:w-4/6">
                  <div className="relative flex items-start">
                    <div className="timeline-wrapper relative w-1">
                      <div className="gradient-line absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-fuchsia-500 to-cyan-400 z-0" />
                    </div>

                    <div className="expText relative z-10 flex items-center gap-4">
                      <div className="timeline-logo">
                        <img
                          src={card.imgPath}
                          alt={card.alt}
                          className="w-20 h-20 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
