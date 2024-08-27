

import React from 'react';
import heroImg from "../Assets/photo.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Home = () => {
  return (
    <div name="home" className="w-full h-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex  flex-col h-full justify-center items-start px-4 text-white pt-20 pb-20 md:flex-row">
        <div className="ml-20 flex flex-col justify-start h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-20">I'm a Web Developer</h2>
          <p className=" text-gray-500 max-w-md py-4">I am passionate about building and designing innovative software solutions. I enjoy working on web applications and have a strong foundation in technologies such as React, Tailwind, MongoDB and many more.
          </p>
          <div>
            <button className="group text-white px-6 w-fit py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-2"/>
              </span>
            </button>
          </div>
        </div>
        <div className="pt-70 ml-20 mb-10 mt-10 hero-image">
          <img className="h-32 w-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full" src={heroImg} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Home;

