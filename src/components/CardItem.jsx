
import React from "react";

const CardItem = () => {
  return (
    
    <div>
      <div className="flex mt-20 ml-100  w-80 h-110 shadow-xl border-red-400 rounded-2xl ">
        <img src="/images/basic-card.jpg" className="rounded-2xl object-cover"></img>
        <p className=" mt-7">NOMBRE</p>
      </div>
    </div>
  );
};

export default CardItem;