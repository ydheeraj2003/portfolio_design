import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white p-4">
        <div className="flex flex-col h-full max-w-screen-lg mx-auto p-4">
            <div className="mt-20">
                <p className="text-4xl font-bold border-b-4 border-gray-500">Contact</p>
                <p className="py-8 text-gray-400">Submit the form below to get touch with me</p>
            </div>

            <div className="mt-20">
                <form action="https://getform.io/f/paqgwvqa" method="POST" className="w-full h-screen flex flex-col gap-8">
                    <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-gray-400 outline-none" required/>
                    <input type="email" name="email" placeholder="Enter your email" className="p-2 bg-transparent border-2 rounded-md text-gray-400 outline-none" required/> 
                    <textarea name="message" placeholder="Enter your message" rows="10" className="p-2 bg-transparent border-2 rounded-md text-gray-400 outline-none" required></textarea>            
                    <button className="bg-gradient-to-b from-cyan-500 to-blue-500 text-white cursor-pointer px-6 py-3 my-8 mx-auto rounded-md hover:scale-110 hover: duration-300">Let's talk</button>   
                </form>
            </div>

        </div>
    
    
    </div>
  )
}

export default Contact