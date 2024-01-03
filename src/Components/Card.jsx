import React from "react";

const Card = ({ image, title, team }) => {
  return (
    <div className="w-56 h-auto rounded-xl border-y-white border-2 border-stone-800 border-opacity-10 delay-00 hover:brightness-125">
      <div className="w-full h-auto rounded-[25.35px] border-2 border-orange-300 border-opacity-50">
        <div className="flex items-center justify-center w-74 h-auto rounded-md px-4 py-4 ">
          <img src={image} alt={title} className="w-[228px] h-[193.74px] rounded-[16.90px] object-cover bg-amber-700 " />
        </div>
        <div className="flex flex-col gap-1 h-full">
          <div className="card-content p-4">
            <h2 className="text-center text-white text-xl font-medium font-['Avenir'] uppercase underline opacity-80">{title}</h2>
            <p className=" opacity-70 pt-2 text-center text-white text-xs font-normal font-['Avenir']">{team}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
