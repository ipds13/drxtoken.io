import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DRXTokenTeam from "/img/DRX Token Team.png";
import Group from "/img/Group.png";
import Card from "./Card";
import kash from "/img/KashTopan.png";
import Sanjeev from "/img/Sanjev.jpeg";
const DrxTokenTeam = () => {
  const cardData = [
    { id: 1, name: "Sanjeev", team: "CEO", image: Sanjeev },
    { id: 2, name: "Kash", team: "CMO", image: kash },
    // Add more cards if needed
  ];

  return (
    <div id="team" className="content1Content1 bg-gray-900 p-10 md:p-5 font-['Avenir']" style={{ paddingTop: "110px" }}>
      <div className="flex items-center justify-center mb-6 md:mb-10">
        <img src={DRXTokenTeam} alt="DRX Token" className="w-full md:max-w-lg lg:max-w-xl" />
      </div>
      <div className="flex flex-wrap justify-center items-center text-center gap-4 md:gap-10 md:grid-col-2">
        {cardData.map((card) => (
          <div key={card.id} className="mb-8 md:mb-2 sm:mb-2 gap-5">
            <Card image={card.image} title={card.name} team={card.team} />
            <div className="flex justify-center items-center text-center m-2 ">
              <img src={Group} alt="Group" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrxTokenTeam;
