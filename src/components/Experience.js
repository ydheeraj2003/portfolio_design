import React from 'react'
import html from "../Assets/html.webp"
import css from "../Assets/css.png"
import javascript from "../Assets/javascript.png"
import react from "../Assets/react.webp"
import java from "../Assets/java.webp"
import expressjs from "../Assets/expressjs.png"
import nodejs from "../Assets/nodejs.png"
import mysql from "../Assets/mysql.png"

const Experience = () => {


  const techs= [
    {
        id: 1,
        src: html,
        title: "HTML",
        style: "shadow-orange-500"
    },
    {
        id: 2,
        src: css,
        title: "CSS",
        style: "shadow-blue-500"
    },
    {
        id: 3,
        src: javascript,
        title: "JAVASCRIPT",
        style: "shadow-yellow-300"
    },
    {
        id: 4,
        src: react,
        title: "REACT",
        style: "shadow-blue-600"
    },
    {
        id: 5,
        src: java,
        title: "JAVA",
        style: "shadow-orange-400"
    },
    {
        id: 6,
        src: expressjs,
        title: "EXPRESSJS",
        style: "shadow-yellow-500"
    },
    {
        id: 7,
        src: nodejs,
        title: "NODEJS",
        style: "shadow-green-400"
    },
    {
        id: 8,
        src: mysql,
        title: "SQL",
        style: "shadow-sky-400"
    }
  ]  
  return (
    <div name="experience" className="pt-40 w-full h-full bg-gradient-to-b from-black justify-start to-gray-800 text-white">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col">
        
            <div className="px-10">
                <p className="text-4xl font-bold border-b-4 inline  border-gray-500">Experience</p>
                <p className="py-6">These are the technologies that I've worked with</p>
            </div>
        
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-20 px-12 ">

                {

                    techs.map(({id,src,style,title}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 ${style}`}>
                            <img className="w-20 mx-auto"src={src} alt=""/>
                            <p className="mt-4">{title}</p>
                        </div>
                    ))
                }
                
            </div>
        </div>
    
    </div>
  )
}

export default Experience