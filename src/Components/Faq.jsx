import React, { useState } from "react";
import flatblack from "/img/flatblack.png";
import { RiArrowDropDownLine } from "react-icons/ri";

const Faq = () => {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);
  const [dropdown5, setDropdown5] = useState(false);

  const toggleDropdown = (dropdownNumber) => {
    switch (dropdownNumber) {
      case 1:
        setDropdown1(!dropdown1);
        break;
      case 2:
        setDropdown2(!dropdown2);
        break;
      case 3:
        setDropdown3(!dropdown3);
        break;
      case 4:
        setDropdown4(!dropdown4);
        break;
      case 5:
        setDropdown5(!dropdown5);
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-gray-900 relative z-10" style={{ paddingTop: "140px" }}>
      <div className="flex justify-center items-center relative z-10">
        <div className="items-center flex flex-col px-5 md:px-10 lg:px-20 mx-5 md:mx-10 lg:mx-22">
          <div className="flex flex-col gap-4 justify-center items-center">
            <div>
              <img src={flatblack} alt="DRX Token" className="w-72 h-90 mx-auto mb-8 md:mb-0" />
            </div>
            <div className="flex justify-center text-center mt-2">
              <h1 className="w-full md:w-[607px] text-white">
                Enim nisi ex cillum minim tempor esse ut. Aliqua laboris et reprehenderit adipisicing ex occaecat. Est id id aute esse adipisicing magna ex reprehenderit esse. Sunt quis aliquip est consectetur enim dolore exercitation
                occaecat anim excepteur ad. Consequat occaecat minim ut fugiat.
              </h1>
            </div>
          </div>

          <div className="grid grid-col items-center justify-center text-white">
            {/* Dropdowns */}
            <div className="text-center text-orange-300 text-xl font-extrabold font-['Avenir'] my-8 mt-20 mb-5">
              <h1>Pertanyaan yang sering diajukan</h1>
            </div>
            <div className="bg-orange-900 bg-opacity-5 rounded-md border border-yellow-600 border-opacity-20 flex flex-col">
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className={`relative mt-2 ${index !== 1 ? "md:w-[565px]" : "md:w-[607px]"}`}>
                  <div className="flex flex-row justify-between underline border-separate border-white border- ">
                    <button onClick={() => toggleDropdown(index)} className="border-separate border-white border- text-white px-4 py-2 rounded-full focus:outline-none ">
                      {index === 1 && "Apa itu DRX Token ? "}
                      {index === 2 && "Gimana Cara Gabungnya?"}
                      {index === 3 && "Kenapa Harus DRX Token?"}
                      {index === 4 && "Beli DRX Token nya dimana?"}
                      {index === 5 && "DRX Token aman gak sih?"}
                    </button>
                    <h1 onClick={() => toggleDropdown(index)}>
                      <RiArrowDropDownLine className="cursor-pointer text-white text-4xl underline bg-gray-900" />
                    </h1>
                  </div>
                  {dropdown1 && index === 1 && (
                    <div className="dropdown-content px-4 w-full md:w-[565px] text-white text-opacity-50 text-base font-['Avenir'] bg-gray-900">
                      Laborum consequat culpa adipisicing pariatur dolor voluptate aute aliqua pariatur est. Commodo cupidatat velit est aliqua reprehenderit occaecat Lorem magna duis sit culpa anim. Ad mollit consectetur ut commodo
                      consequat ullamco. Mollit cupidatat nisi sit minim eiusmod anim ullamco occaecat voluptate. Dolore deserunt tempor nisi voluptate cillum sit est anim incididunt fugiat.
                    </div>
                  )}
                  {dropdown2 && index === 2 && (
                    <div className="dropdown-content px-4 w-full md:w-[565px] text-white text-opacity-50 text-base font-['Avenir'] bg-gray-900">
                      Aliqua occaecat proident id voluptate quis dolor pariatur tempor. Mollit id commodo eu magna. Mollit et culpa fugiat sit duis anim eiusmod aliqua enim adipisicing. Aute magna mollit ea elit dolore. Occaecat amet velit
                      id proident mollit cillum ea. Laboris minim sint non amet sunt.
                    </div>
                  )}
                  {dropdown3 && index === 3 && (
                    <div className="dropdown-content px-4 w-full md:w-[565px] text-white text-opacity-50 text-base font-['Avenir'] bg-gray-900">
                      Quis occaecat qui sit officia eu cupidatat proident voluptate nulla. Aliquip aute mollit ullamco Lorem cupidatat. Ut esse adipisicing aute ad mollit velit. Nulla voluptate eu proident aliqua labore adipisicing et id.
                    </div>
                  )}
                  {dropdown4 && index === 4 && (
                    <div className="dropdown-content px-4 w-full md:w-[565px] text-white text-opacity-50 text-base font-['Avenir'] bg-gray-900">
                      Non duis ad proident consectetur aute fugiat sit fugiat. Est adipisicing pariatur enim culpa ullamco voluptate exercitation eiusmod esse. Elit excepteur culpa mollit ad do.
                    </div>
                  )}
                  {dropdown5 && index === 5 && (
                    <div className="dropdown-content px-4 w-full md:w-[565px] text-white text-opacity-50 text-base font-['Avenir'] bg-gray-900">
                      Aute officia irure ea aliqua. Deserunt incididunt cupidatat nostrud eiusmod. Do eu ea tempor enim. Ipsum ea anim cillum sint fugiat dolore quis consectetur commodo.
                    </div>
                  )}
                  <div className="w-full md:w-[567px] h-[0px] border border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
