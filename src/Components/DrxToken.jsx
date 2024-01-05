import React, { useState } from "react";
import drxTOKEN1 from "/img/Drx Token.png";
import DRXWhitepaper from "../PdfDummy/DRX Whitepaper.pdf";
import PDFViewer from "pdf-viewer-reactjs";

const DrxToken = () => {
  const [showPDF, setShowPDF] = useState(false);

  const handleDownload = () => {
    // Memunculkan PDF jika belum ditampilkan
    window.open(DRXWhitepaper, "_blank");

    // Mendownload PDF
    // saveAs(DRXWhitepaper, "sample.pdf");
  };

  return (
    <div id="witepaper" className="flex flex-col bg-gray-900 mx-auto p-8 md:p-16 z-10" style={{ paddingTop: "150px" }}>
      <img src={drxTOKEN1} alt="DRX Token" className="w-72 h-90 mx-auto mb-8 md:mb-0" />
      <div className="text-center text-white text-xl md:text-2xl font-['Avenir']">
        <h1 className="text-center text-white mt-5">
          Get in-depth insight into DRX Token. Download our whitepaper here for <br /> sharp analysis and deep understanding
        </h1>
      </div>
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
        <button onClick={handleDownload} className="w-full md:w-[321px] h-[68px] rounded-3xl border-yellow-500 hover:bg-gradient-to-r from-transparent via-[#785501] to-transparent text-white font-semibold py-2 px-4 border ">
          Whitepaper
        </button>
        {showPDF && (
          <div className="my-8 w-full md:w-[500px] mx-auto">
            {/* Menampilkan PDF */}
            <PDFViewer document={{ url: DRXWhitepaper }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DrxToken;
