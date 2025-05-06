import { socialImgs , translations } from "../constants";

const Footer = ({ language }) => {
  const t = translations[language] || translations.en;

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>{t.terms}</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <img src={socialImg.imgPath} alt={`icono de ${socialImg.name}`} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Adriana Brandan. {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
