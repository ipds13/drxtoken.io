import React, { useState } from "react";
import Frame7 from "/img/Frame 7.png";
import Frame2 from "/img/Group 875.png";
import Frame3 from "/img/3.png";
import Frame4 from "/img/4.png";
import Frame5 from "/img/Frame 5.png";
import drxRoadmap from "/img/DRX Token Roadmap.png";

const ImageWithPopup = ({ image, popupText, popupList, zIndex }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative ">
      <div className="w-[89.21px] h-100 justify-center items-center inline-flex relative">
        <div className="w-[89.21px] h-20 relative">
          <img src={image} alt="Roadmap Image" className="hover:opacity-50 transition-opacity duration-300" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        </div>
        {isHovered && (
          <div className="rounded-[18.75px] border-x-2 border-stone-700 absolute top-[100%] left-1/2 transform -translate-x-1/4 mt-2" style={{ height: "auto", width: "200px" }}>
            <div className="bg-slate-600 bg-opacity-10 rounded-[18.75px] border-stone-700 backdrop-blur-[31.25px] p-4 border-2">
              <div className="text-start text-orange-300 text-[9.25px] font-black font-['Avenir'] uppercase mb-4 flex flex-col justify-center items-center">
                <img src={image} alt="" className="mb-2 w-[44.6px] h-[40px]" />
                <p className="text-white">{popupText}</p>
              </div>
              <ul className="text-white text-xs font-['Avenir'] capitalize leading-[19px] list-disc mx-2">
                {popupList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const DrxTokenRoadMap = () => {
  return (
    <div id="roadmap" className="relative bg-gray-900 mx-auto p-8 md:p-16 font-['Avenir'] " style={{ paddingTop: "120px", zIndex: "10" }}>
      <img src={drxRoadmap} alt="DRX Token" className="w-full md:w-72 h-90 mx-auto mb-8 md:mb-0" />
      <div className="text-center text-white text-xl mb-12 pt-4">Move the mouse cursor over the roadmap phase to see in detail</div>
      <div className="h-[400px]">
        <div className="max-w-screen-2xl mx-auto relative z-auto">
          <div>
            {/* Conditional rendering based on screen size */}
            <img src={Frame5} className="absolute hidden xl:block" />
          </div>
          <div className="container grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 justify-between ">
            {/* Phase 1 */}
            <div className="xl:absolute left-0 xl:top-10 ">
              <ImageWithPopup image={Frame7} popupText="Phase 1" popupList={["DRX Team Building", "R&D and Collecting Information", "Network Development", "Whitepaper", "Tokenomics"]} />
            </div>

            {/* Phase 2 */}
            <div className="xl:absolute left-0 xl:left-[30%] xl:top-[170px]">
              <ImageWithPopup image={Frame2} popupText="Phase 2" popupList={["DRX Website Development", "Angel Investor", "Social Media Campaign", "Community Building", "Smart Contract Audit", "DEX Listing"]} />
            </div>

            {/* Phase 3 */}
            <div className="xl:absolute left-0 xl:left-[65%] xl:top-[198px]">
              <ImageWithPopup image={Frame3} popupText="Phase 3" popupList={["CEX Listing", "DRX Platform Building", "Partnership"]} />
            </div>

            {/* Phase 4 */}
            <div className="xl:absolute right-0 xl:right-4 xl:top-20">
              <ImageWithPopup image={Frame4} popupText="Phase 4" popupList={["Bigger Marketing Campaign", "Community Events", "Audit Tech", "Update Roadmap is Coming"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrxTokenRoadMap;
