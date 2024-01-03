import React, { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Content3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-gray-900">
      <div className="content1Content1 p-5 md:p-10 lg:p-10 rounded-[20px] shadow">
        <div className="m-5 md:m-10 lg:m-20 p-5 shadow-xl bg-gray-850">
          <div className="flex text-center justify-center content3 rounded-md mx-5 md:mx-10 lg:mx-20 my-5 md:my-10 lg:my-20 gap-2 relative ">
            <Carousel className="rounded-xl w-full md:w-[80%] lg:w-[70%] mx-auto" infinite={false} perPage={1} total={5} index={currentIndex} onChange={setCurrentIndex}>
              <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                <div className="w-full md:w-[80%] h-[175px] md:mt-0 md:ml-3 rounded-[10px] p-5 bg-gradient-to-l opacity-80 from-orange-800 to-yellow-900">
                  <button className="bg-gradient-to-l from-orange-400 to-yellow-800 text-white px-4 py-2 rounded-full">New Event</button>
                  <h1 className="w-full text-center text-white text-xl font-normal font-['Avenir']r">Blockchain node development blueprints available on AWS</h1>
                  <div className="mx-10 md:mx-20 text-center w-[36px] h-[0px] border border-white" />
                  <h1 className="text-md font-['Avenir'] text-white p-2">Sunday, November 12, 2023</h1>
                </div>
              </div>
              {/* Slide 3 */}
              {/* Add additional slides as needed */}
            </Carousel>
            <button onClick={handlePrev} className="absolute text-2xl left-0 top-1/2 transform -translate-y-1/2 text-white">
              <GrFormPrevious />
            </button>
            <button onClick={handleNext} className="absolute text-2xl right-0 top-1/2 transform -translate-y-1/2 text-white">
              <MdOutlineNavigateNext />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content3;
