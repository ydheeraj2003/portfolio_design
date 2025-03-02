
import React from 'react'
import {FaLinkedin,FaGithub} from "react-icons/fa"
import { IoMdMail } from "react-icons/io";
import {BsFillPersonLinesFill} from "react-icons/bs"
import resume from "../Assets/Dheeraj_Resume_Latest.pdf"

const links = [
  {
    id: 1,
    child: (
        <>
          Linkedin<FaLinkedin size={20}/>
        </>
    ),
    href: "https://www.linkedin.com/feed/"
  },

  {
    id: 2,
    child: (
        <>
          <p className="hidden">s</p>GitHub... <FaGithub size={20}/>
        </>
    ),
    href: "https://github.com/ydheeraj2003"
  },
   
  {
    id: 3,
    child: (
        <>
          EmailID.. < IoMdMail size={20} />
        </>
    ),
    href: "https://mail.google.com/mail/u/0/#inbox"
  },

  {
    id: 4,
    child: (
        <>
          Resume.<BsFillPersonLinesFill size={20}/>
        </>
    ),
    href: resume,
    download: true
    
  }
  
]

const Social = () => {
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
        <ul>
          {links.map(({ id, child, href}) => (
            <li
              key={id}
              className={"relative w-30 h-10 bg-gray-500 px-4 ml-[-83px] transition duration-300 ease-in-out transform hover:translate-x-20"}
            >
              <a href={href} className="w-full h-full flex items-center text-white">
                <div className="flex items-center gap-5 justify-center">
                  {child}
                </div>
              </a>
            </li>
          ))}
        </ul>
    </div>
  )
}
export default Social











