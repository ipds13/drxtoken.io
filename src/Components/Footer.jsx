import React from "react";
import flatblack from "/img/flatblack.png";
import { BiLogoInstagramAlt, BiLogoTelegram,BiLogoTwitter } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 flex flex-col font-['Avenir']" style={{ paddingTop: "50px" }}>
      <div className="container grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 justify-between">
        {/* Bagian Manage By */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-sm font-semibold text-white uppercase dark:text-white mb-4">Manage By</h2>
          <img id="/" src={flatblack} alt="Flatblack Logo" className="w-20 h-auto mb-4" />
          <div className="flex space-x-5 justify-center">
            <a href="https://www.instagram.com/drxtoken" target="_blank"  className="text-blue-400 hover:text-white dark:hover:text-white">
              <BiLogoInstagramAlt />
              <span className="sr-only">Instagram page</span>
            </a>
            
            <a href="http://t.me/DRXerc20" target="_blank"  className="text-blue-400 hover:text-white dark:hover:text-white">
              <BiLogoTelegram />
              <span className="sr-only">Telegram page</span>
            </a>
            <a href="https://x.com/DrxToken" target="_blank" className="text-blue-400 hover:text-white dark:hover:text-white">
              <BiLogoTwitter />
              <span className="sr-only">Twitter page</span>
            </a>
          </div>
        </div>

        {/* Bagian Layanan */}
        <div className="flex flex-col">
          <h2 className="text-sm font-semibold text-white uppercase dark:text-white mb-4">Service</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Help
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Question and answer
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                How to sell
              </a>
            </li>
          </ul>
        </div>

        {/* Bagian Tentang Kami */}
        <div className="flex flex-col items-center ">
          <h2 className="text-sm font-semibold text-white uppercase dark:text-white mb-4 ">About Us</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium pl-5">
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Career
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Blogs
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Bagian DRX Headquarter */}
        <div className="flex flex-col px-2">
          <h2 className="text-sm font-semibold text-white uppercase dark:text-white mb-4 text-start">DRX Headquarter</h2>
          <ul className="text-gray-500 dark:text-gray-400 font-medium">
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Jl. Senopati No.8, Senayan, Kec. Kby. Baru, South Jakarta City, Special Capital Region of Jakarta 12190
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
