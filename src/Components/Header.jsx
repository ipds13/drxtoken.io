import React, { useState } from "react";
import drxTOKEN1 from "/img/Drx Token.png";
import illustrasi1 from "/img/Illustrasi DRX.svg";
import { GrLinkNext } from "react-icons/gr";
import { TfiDownload } from "react-icons/tfi";
import DRXWhitepaper from "../PdfDummy/DRX Whitepaper.pdf";
import PDFViewer from "pdf-viewer-reactjs";

const Header = () => {
  const [showPDF, setShowPDF] = useState(false);

  const handleDownload = () => {
    // Memunculkan PDF jika belum ditampilkan
    window.open(DRXWhitepaper, "_blank");

    // Mendownload PDF
    // saveAs(DRXWhitepaper, "sample.pdf");
  };
  const handleTele = () => {
    // Memunculkan PDF jika belum ditampilkan
    window.open("https://t.me/DRXerc20", "_blank");

    // Mendownload PDF
    // saveAs(DRXWhitepaper, "sample.pdf");
  };
  return (
    <>
      <div className="bg-gray-900 font-['Avenir']">
        <section className="flex flex-col lg:flex-row justify-center items-center p-4 bg-transparent">
          <div id="Aboutus" className="flex lg:flex-wrap m-3 items-center justify-center">
            <div className="lg:pt-20">
              <div className="relative lg:ml-20">
                <img className="w-auto md:w-auto h-40 md:h-48 mt-4 cursor-pointer " src={drxTOKEN1} alt="DRX Token" />
                <div className="md:w-[504px] lg:w-[504px] sm:w-[full] h-36 text-white text-lg md:text-xl md:text-center font-normal font-['Avenir'] leading-7 md:leading-9 sm:pb-24 ">
                  DRX-Token is a crypto token built on the Ethereum network. DRX-Token inherits the speed, security, transparency, and other characteristics of Ethereum Blockchain.
                </div>
                <div className="flex flex-col md:flex-row mt-4 gap-2 md:items-center md:justify-center lg:justify-start sm:items-center sm:justify-center">
                  <div
                    onClick={handleTele}
                    className="cursor-pointer w-full md:w-56 h-20 md:h-12 px-5 py-2 md:ml-2 rounded-3xl border-2 border-orange-400 justify-center items-center gap-1.5 inline-flex hover:bg-gradient-to-r from-transparent via-[#785501] to-transparent"
                  >
                    <div className="text-white text-xl font-normal font-['Avenir'] leading-7">Join Telegram</div>
                    
                    <TfiDownload className="text-white font-bold text-xl" />
                  </div>
                  <div
                    onClick={handleDownload}
                    className="cursor-pointer w-full md:w-56 h-20 md:h-12 px-5 py-2 md:ml-2 rounded-3xl border-2 border-orange-400 justify-center items-center gap-1.5 inline-flex hover:bg-gradient-to-r from-transparent via-[#785501] to-transparent"
                  >
                    <div className="text-white text-xl font-normal font-['Avenir'] leading-7">Whitepaper</div>
                    
                    <TfiDownload className="text-white font-bold text-xl" />
                  </div>
                </div>
                {/* <div className="flex flex-col md:flex-row mt-4 gap-2 md:items-center md:justify-center lg:justify-start sm:items-center sm:justify-center">
                  <div
                    onClick={handleDownload}
                    className="cursor-pointer w-full md:w-56 h-20 md:h-24 px-5 py-2 md:ml-2 rounded-3xl border-2 border-orange-400 justify-center items-center gap-1.5 inline-flex hover:bg-gradient-to-r from-transparent via-[#785501] to-transparent"
                  >
                    <div className="text-white text-xl font-normal font-['Avenir'] leading-7">Whitepaper</div>
                    
                    <TfiDownload className="text-white font-bold text-xl" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 flex flex-row items-center justify-center lg:flex-row-reverse lg:pt-30">
            <div className="relative">
              <img className="w-full" src={illustrasi1} alt="Illustration" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
