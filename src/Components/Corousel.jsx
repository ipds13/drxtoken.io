import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const carouselData = [
    {
      id: 1,
      title: "New Content 1",
      text: "This is a new paragraph for content 1.",
      date: "Sunday, November 12, 2023",
    },
    {
      id: 2,
      title: "New Content 2",
      text: "This is a new paragraph for content 2.",
      date: "Saturday, November 11, 2023",
    },
    // Add more data as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gray-900">
      <div className="max-w-md mx-auto rounded-2xl ">
        <div className="p-8 ">
          <Slider {...settings}>
            {carouselData.map((item) => (
              <div key={item.id} className="p-8 border rounded-2xl bg-gray-900 border-yellow-500">
                <h1 className="text-2xl font-bold mb-2 text-center text-white">{item.title}</h1>
                <p className="text-center mb-4 text-white">{item.text}</p>
                <p className="text-sm text-white text-center">{item.date}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
