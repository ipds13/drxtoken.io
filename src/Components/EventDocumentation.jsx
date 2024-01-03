import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Event from "/img/Event Documentation.png";
const showOnMobile = window.innerWidth < 600;

// Garudaku Images
import garudaku1 from "/img/DrxGarudaku/DSC00001.jpg";
import garudaku2 from "/img/DrxGarudaku/DSC00002.jpg";
import garudaku3 from "/img/DrxGarudaku/DSC00003.jpg";
import garudaku4 from "/img/DrxGarudaku/DSC00117.jpg";
import garudaku5 from "/img/DrxGarudaku/DSC00119.jpg";

// Hipmi Images
import hipmi1 from "/img/DrxHipmi/IMG_119.jpg";
import hipmi2 from "/img/DrxHipmi/IMG_125.jpg";
import hipmi3 from "/img/DrxHipmi/IMG_126.jpg";
import hipmi4 from "/img/DrxHipmi/IMG_2887.jpg";
import hipmi5 from "/img/DrxHipmi/presidenri.go.id-31082023153027-64f04fa3d64c39.42906027.jpg";

// Super Images
import super1 from "/img/DrxSuper/DNA-6831 (1).jpg";
import super2 from "/img/DrxSuper/DNA-7235 (1).jpg";
import super3 from "/img/DrxSuper/DNA-7735 (1) (1).jpg";
import super4 from "/img/DrxSuper/DNA-7914 (1).jpg";
import super5 from "/img/DrxSuper/DNA-6831 (1).jpg";
import super6 from "/img/DrxSuper/SENSxDNASPORT-1317 (1) (1).jpg";

// GK Images
import gk1 from "/img/DrxTokenGK/DSC05189.jpg";
import gk2 from "/img/DrxTokenGK/DSC05333.jpg";
import gk3 from "/img/DrxTokenGK/DSC05411.jpg";
import gk4 from "/img/DrxTokenGK/DSC50264.jpg";

// Brick Images
import Brick1 from "/img/DrxBrickParkour/Edit Foto-01.jpg";
import Brick2 from "/img/DrxBrickParkour/Edit Foto-02.jpg";
import Brick3 from "/img/DrxBrickParkour/Edit Foto-04.jpg";
import Brick4 from "/img/DrxBrickParkour/Edit Foto-05.jpg";
import Brick5 from "/img/DrxBrickParkour/Edit Foto-06.jpg";

// Woodball Images
import Woodbal1 from "/img/DrxWoodball/EVN03800.jpg";
import Woodbal2 from "/img/DrxWoodball/EVN03933.jpg";
import Woodbal3 from "/img/DrxWoodball/EVN06025.jpg";
import Woodbal4 from "/img/DrxWoodball/EVN06141.jpg";
import Woodbal5 from "/img/DrxWoodball/EVN06150.jpg";

// Ifel Images
import ifel1 from "/img/DrxIfel/IMG_0741.jpg";
import ifel2 from "/img/DrxIfel/IMG_0742.jpg";

const images = [
  garudaku1,
  garudaku2,
  garudaku3,
  garudaku4,
  garudaku5,
  hipmi1,
  hipmi2,
  hipmi3,
  hipmi4,
  hipmi5,
  super1,
  super2,
  super3,
  super4,
  super5,
  super6,
  gk1,
  gk2,
  gk3,
  gk4,
  Brick1,
  Brick2,
  Brick3,
  Brick4,
  Brick5,
  Woodbal1,
  Woodbal2,
  Woodbal3,
  Woodbal4,
  Woodbal5,
  ifel1,
  ifel2,
];

const EventDocumentation = () => {
  const settings = {
    dots: false, // Menampilkan indikator titik/tanda pada slider
    infinite: true, // Mengaktifkan mode infinite looping (putaran tak terbatas)
    speed: 1000, // Kecepatan animasi perpindahan slider dalam milidetik
    slidesToShow: 1, // Jumlah tampilan slide yang akan ditampilkan pada satu waktu
    slidesToScroll: false, // Jumlah slide yang akan di-scroll ketika tombol panah diklik
    autoplay: false, // Mengaktifkan mode otomatis memainkan slider
    autoplaySpeed: 50, // Kecepatan otomatis perpindahan slide dalam milidetik
    swipeToSlide: true, // Mengaktifkan fitur swipe untuk berpindah antar slide
    variableWidth: true, // Mengaktifkan lebar variabel pada slide
    centerMode: true, // Mengaktifkan mode pusat, slide aktif akan berada di tengah
    centerPadding: "5x0px", // Ruang polong di sekitar slide pusat (padding)
    arrows: true, // Menyembunyikan tombol panah navigasi
    // initialSlide: 0,
  };

  const kartuData = [
    { id: 1, name: "Event 1", content1: "Singapore", content2: "10 November 2023", images: [garudaku2, garudaku3, garudaku4, garudaku5] },
    { id: 2, name: "Event 2", content1: "Malaysia", content2: "15 November 2023", images: [hipmi1, hipmi2, hipmi3, hipmi4] },
    { id: 3, name: "Event 3", content1: "Indonesia", content2: "20 November 2023", images: [super1, super2, super3, super4] },
    { id: 4, name: "Event 4", content1: "Mesir", content2: "20 November 2023", images: [gk1, gk2, gk3, gk4] },
    { id: 5, name: "Event 5", content1: "Tokyo", content2: "20 November 2023", images: [Brick1, Brick2, Brick3, Brick4, Brick5] },
    { id: 6, name: "Event 6", content1: "Canada", content2: "20 November 2023", images: [Woodbal1, Woodbal2, Woodbal4, Woodbal5] },
    { id: 7, name: "Event 7", content1: "Africa", content2: "20 November 2023", images: [ifel1, ifel2] },
    // Add more kartuData as needed
  ];
  const mobileImage = [
    { id: 1, name: "Event 1", content1: "Singapore", content2: "10 November 2023", images: [garudaku2] },
    { id: 2, name: "Event 2", content1: "Malaysia", content2: "15 November 2023", images: [hipmi1] },
    { id: 3, name: "Event 3", content1: "Indonesia", content2: "20 November 2023", images: [super1] },
    { id: 4, name: "Event 4", content1: "Mesir", content2: "20 November 2023", images: [gk3] },
    { id: 5, name: "Event 5", content1: "Tokyo", content2: "20 November 2023", images: [Brick5] },
    { id: 6, name: "Event 6", content1: "Canada", content2: "20 November 2023", images: [Woodbal2] },
    { id: 7, name: "Event 7", content1: "Africa", content2: "20 November 2023", images: [ifel2] },
  ];

  return (
    <div id="event" className="content1Content1 bg-gray-900 p-10 md:p-16 sm:p-8" style={{ paddingTop: "150px" }}>
      <div className="flex items-center justify-center mb-8">
        <img src={Event} alt="DRX Token" className="w-auto max-w-[80%] md:max-w-[70%] lg:max-w-[60%]" />
      </div>
      {console.log("ee", showOnMobile)}
      {showOnMobile == true ? 
        mobileImage.map((group) => (
          <div key={group.id} className="flex items-center">
            <div className="flex  md:flex-row-reverse">
              {group.images.map((image, index) => (
                <div key={index} className={index % 2 === 0 ? "sm:col-span-2" : "gap-2 sm:-col-span-1"}>
                  
                    <div className="w-full h-[155px] rounded-lg">
                      <img src={image} alt={`Image ${index + 2}`} className="w-full h-full object-cover rounded-lg m-2" />
                    </div>
                  
                </div>
              ))}
              <div className="p-4 bg-gradient-to-l from-orange-400 to-yellow-800 rounded-xl ml-4 max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
                <h3 className="text-lg font-semibold mb-2 text-white text-center underline">{group.name}</h3>
                <p className="text-gray-300 text-center">{group.content1}</p>
                <p className="text-gray-300 text-center">{group.content2}</p>
              </div>
            </div>
          </div>
        ))
        :
        <div className="flex items-center justify-center">
        <Slider key={kartuData.length} {...settings} className="w-full">
          {kartuData.map((group) => (
            <div key={group.id} className="flex items-center">
              <div className="flex  md:flex-row-reverse">
                {group.images.map((image, index) => (
                  <div key={index} className={index % 2 === 0 ? "sm:col-span-2" : "gap-2 sm:-col-span-1"}>
                    {index % 2 === 0 ? (
                      <img src={image} alt={`Image ${index + 1}`} className="w-auto h-[155px] m-2 max-w-full" />
                    ) : (
                      <div className="w-full h-[155px] rounded-lg">
                        <img src={image} alt={`Image ${index + 2}`} className="w-full h-full object-cover rounded-lg m-2" />
                      </div>
                    )}
                  </div>
                ))}
                <div className="p-4 bg-gradient-to-l from-orange-400 to-yellow-800 rounded-xl ml-4 max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
                  <h3 className="text-lg font-semibold mb-2 text-white text-center underline">{group.name}</h3>
                  <p className="text-gray-300 text-center">{group.content1}</p>
                  <p className="text-gray-300 text-center">{group.content2}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      }
    </div>
  );
};

export default EventDocumentation;
