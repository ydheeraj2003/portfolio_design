

import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css'; // Import your custom CSS file

const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "skills" },
    { id: 4, link: "projects" },
    { id: 5, link: "contact" }
  ];

  const handleNavToggle = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    setNav(!nav);
  };

  const handleLinkClick = () => {
    setNav(false); // Close the menu
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
  };


  return (
    <div className="relative">
      <div className={`flex justify-between items-center w-full h-20 bg-black text-white fixed px-4 ${nav ? 'nav-open' : ''}`}>
        <div>
          <h1 className="text-5xl font-signature ml-2">Dheeraj</h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ link, id }) => (
            <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
              <ScrollLink to={link} smooth={true} duration={500} onClick={handleLinkClick}>
                {link}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <div onClick={handleNavToggle} className="z-10 pr-4 text-gray-500 cursor-pointer md:hidden">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center w-full h-screen absolute top-0 right-0 bg-gradient-to-b from-black to-gray-500 md:hidden">
          {links.map(({ link, id }) => (
            <li key={id} className="px-4 text-4xl py-6 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
              <ScrollLink to={link} smooth={true} duration={500} onClick={handleLinkClick}>
                {link}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;





