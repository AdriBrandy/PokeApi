const TitleHeader = ({ title, sub }) => {
    return (
      <div className="flex flex-col items-center text-center gap-2 w-full px-4">
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-amber-500 break-words">
          {title}
        </h1>
        <div className=" hero-badge text-sm sm:text-base md:text-lg text-amber-700 font-light break-words max-w-full bg-amber-200">
          <p className="text-sm sm:text-base md:text-lg text-black font-mono break-words whitespace-normal w-full">
            {sub}
          </p>
        </div>
      </div>
    );
  };
  
  export default TitleHeader;
  