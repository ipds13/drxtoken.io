import React, { useRef } from "react";

const SmartContract = () => {
  const contentRef = useRef(null);

  const handleCopyClick = () => {
    const content = contentRef.current.innerText;
    const textarea = document.createElement("textarea");
    textarea.value = content;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  return (
    <div className=" flex items-center justify-center bg-gray-900 py-5 ">
      <div className="bg-gray-900 rounded-2xl shadow-lg w-full md:w-[70%] lg:w-[50%] xl:w-[40%] mx-4 p-4  shadow-orange-200">
        <h1 className="text-2xl font-bold mb-4 text-white text-center">Smart Contract</h1>
        <div ref={contentRef} className="flex text-white items-center justify-center text-center">
         C.O.M.I.N.G  S.O.O.N
        </div>
        <div className="flex items-center justify-center mt-4">
          <button disabled onClick={handleCopyClick} className="bg-yellow-600 text-white px-4 py-2 rounded-xl">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmartContract;
