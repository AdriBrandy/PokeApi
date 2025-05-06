
const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();

        if (!id) return;

        const target = document.getElementById(id); // Usa el id que le pasás

        if (target) {
          const offset = window.innerHeight * 0.15;

          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle bg-gradient-to-tl via-amber-300 to-amber-700" />
        <p className="text font-semibold">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;

