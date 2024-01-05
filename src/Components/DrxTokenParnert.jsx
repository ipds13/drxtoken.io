import React from "react";
import drxParnert from "/img/DRX Token Partner.png";
import GudangKripto from "/img/gk.png";
import Bitcoint from "/img/bitcointtt.png";
import DewaUnited from "/img/dewaUnited.png";
import Crypto from "/img/Crypto.png";
import SmartContract from "./SmartContract";

const DrxTokenParnert = () => {
  const partnerImages = [
    { image: GudangKripto, name: "GudangKripto" },
    // { image: Bitcoint, name: "Bitcoin" },
    // { image: Crypto, name: "Crypto" },
    { image: DewaUnited, name: "DewaUnited" },
  ];

  return (
    <div id="parnert" className="bg-gray-900 pb-14 font-['Avenir']" style={{ paddingTop: "130px"}}>
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center px-5 md:px-10 lg:px-20 mx-5 md:mx-10 lg:mx-12 " style={{ height:"470px" }}>
          <div className="w-full md:w-[436px] h-[51px] mx-auto mb-4">
            <img src={drxParnert} alt="DRX Token Partner" className="w-auto h-auto" />
          </div>
          <div className="lg:w-[520px] md:w-[520px]  flex items-center justify-center text-center text-white mb-4 ">
            <h1>Our partners are the key to success, discover the extraordinary potential in partnership with us!</h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
            {partnerImages.map((partner, index) => (
              <div key={index} className="flex flex-col items-center justify-center opacity-70 bg-gradient-to-r from-amber-400 to-yellow-600 w-full h-full rounded-md px-4 py-4 delay-100 hover:brightness-125">
                <div className="flex items-center justify-center h-20">
                  <img src={partner.image} alt={`Partner ${index + 1}`} className="w-full h-auto object-fill mb-5" />
                </div>
                {/* <div className="flex items-center justify-center ">
                  <p className="text-center text-white flex flex-wrap justify-center items-center font-['Avenir']">{partner.name}</p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <SmartContract />
    </div>
  );
};

export default DrxTokenParnert;
