import React from 'react'
import {FaLinkedin} from "react-icons/fa"
//import {FaGithub} from "react-icons/fa"
//import {HiOutlineMail} from "react-icons/hi"
//import {BsFillPersonLinesFill} from "react-icons/bs"

const SocialLinks = () => {
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
        <ul>
            <li className="flex flex-row justify-between items-center w-50 h-14 bg-gray px-4"> 
                <a href="/" className="justify-between w-full text-white"><>Linkedin<span><FaLinkedin size={10}/></span></></a>

            </li>
        </ul>
    </div>
  )
}

export default SocialLinks