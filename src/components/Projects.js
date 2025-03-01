
import React, { useState } from 'react';

const projects = [
    {
      id: 1,
      title: 'CHATBOT',
      description: [
        'Backend Development: Created specific API endpoints using Express.js, a Node.js framework, to facilitate communication between the frontend and backend.',
        'Secure Data Transmission: Implemented POST request handlers to securely transmit user queries from the frontend to the backend, ensuring that user data is securely processed and managed.',
        'History Feature: Integrated a chat history feature that allows users to view past interactions, enhancing the conversational experience by providing context to ongoing chats.',
        'Model Switching: Enabled model switching capability, allowing users to switch between multiple LLM models (gemma2:2b and phi3) within the chatbot for flexibility and experimentation.',
        'Frontend: Developed the frontend using HTML, CSS, and JavaScript to create an engaging and user-friendly chat interface.',
        'Backend: Utilized Express.js on the server side to handle requests and manage interactions between the chatbot and the LLM models, ensuring efficient backend operations and seamless communication.',
      ],
      link: 'https://chatbot-pi6v.onrender.com'
    },

    {
        id: 2,
        title: 'VENDOR MANAGEMENT SYSTEM',
        description: [
          'Dynamic Addition and Management of Firms and Products: The Vendor Management System is designed to allow vendors to dynamically add and manage their firms and products. This means that vendors can easily create new entries for firms they manage, and within each firm, they can add, update, or remove products as needed. The system is built to be flexible, enabling vendors to adapt quickly to changes in their inventory or business structure.',
          'Backend Interface via Vendor Dashboard: A dedicated vendor dashboard is implemented as part of the backend interface. This dashboard provides vendors with a user-friendly platform to manage their firms and products dynamically. Through this dashboard, vendors can perform actions like adding new firms or products, deleting outdated or unnecessary entries. This interface streamlines the management process, making it easier for vendors to maintain control over their business operations.',
          'Frontend Interface: Ability to fetch products by the users and also implemented cart page, so users can able to add products to the cart and as well as remove them from the cart.',
          'Utilization of MERN Stack: The system is developed using the MERN stack, which consists of MongoDB, Express.js, React.js, and Node.js.',
          'MongoDB: Acts as the database to store and manage the data related to firms and products. Its flexible schema allows for easy handling of the dynamic nature of the system.',
          'Express Js: Serves as the backend framework to create the API endpoints that interact with the database and handle requests from the frontend. It facilitates communication between the client and server, ensuring that data is correctly processed and returned.',
          'React Js: Provides the frontend framework used to build the vendor dashboard. It allows for a responsive and interactive user interface, enabling vendors to manage their firms and products seamlessly.',
          'Node Js: Acts as the runtime environment for the backend, enabling the use of JavaScript for server-side scripting. It ensures efficient processing of requests and responses, contributing to the overall performance of the system.'
        ],
        link: 'https://suby-frontend.vercel.app/'
      },
      
      {
        id: 3,
        title: 'Twitter Clone',
        description: [
          'Purpose: Developed a dynamic social media platform where users can create, like, and comment on posts, fostering interaction and engagement.',
          'Implementation Approach: Built a scalable MERN stack application with RESTful APIs and an intuitive UI for seamless user experience.',
          'Features: Integrated authentication, user follow/unfollow, profile editing, post interactions, and real-time notifications for likes and follows.',
          'User Engagement Enhancements: Designed a suggested users feature to boost social connectivity and increase platform interaction.',
          'Technologies used: Utilized MongoDB for database management, Express.js and Node.js for backend APIs, React.js for frontend UI.'
        ],
        link: 'https://twitter-clone-frontend-backend.netlify.app/'
      },

      {
        id: 4,
        title: 'Chat Application',
        description: [
          'Purpose: Developed a real-time chat application enabling seamless instant messaging, allowing users to connect and communicate efficiently.',
          'Implementation Approach: Integrated Socket.io for real-time communication, ensuring instant message delivery, online/offline status updates, and a smooth chat experience with a responsive UI.',
          'Features: Implemented user authentication, real-time message updates, and a potential chats feature that suggests users who havenot started a conversation yet.',
          'User Engagement Enhancements: Designed a clean and intuitive chat interface with responsive design, improving accessibility and engagement for users.',
          'Technologies used: Utilized MongoDB for database storage, Express.js and Node.js for backend logic, React.js for frontend UI, and Socket.io for real-time messaging.'
        ],
        link: 'https://chat-app-frontend-t8ri.onrender.com'
      },

      {
        id: 5,
        title: 'ECOMMERCE',
        description: [
          'Static Platform: Created a static e-commerce website designed to display a range of products. This type of platform is used to present product information and images to users without dynamic content or server-side interactions.',
          'Focused on creating a clear layout: Designed a user-friendly layout that categorizes products into distinct sections. This helps users quickly find and view different types of products.',
          'Utilized HTML: Utilized HTML (HyperText Markup Language) to structure the content on the website, including text, images, and links. ',
          'Utilized CSS: Applied CSS (Cascading Style Sheets) to style the website, ensuring it is visually appealing and consistent with design principles. This included layout design, color schemes, fonts, and overall aesthetics.',
          'HTML and CSS: The combination of HTML and CSS created a static website that is easy to maintain and provides a seamless and attractive user interface for browsing products.',
        ],
        link: 'https://ecommerce-ri50.onrender.com/index.html'
      },

  ];

  const Projects = () => {
    const [visibleDescriptionId, setVisibleDescriptionId] = useState(null);
  
    const handleViewDescription = (id) => {
      setVisibleDescriptionId(visibleDescriptionId === id ? null : id);
    };
  
    return (
      <div name="projects" className="w-full bg-gray-900 text-white py-10">
        <div className="max-w-screen-lg mx-auto px-4">
          <h2 className="text-3xl font-bold border-b-4 border-gray-500 mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(({ id, title, description, link }) => (
              <div key={id} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">
                  View Project
                </a>
                <button 
                  onClick={() => handleViewDescription(id)} 
                  className="block mt-4 text-cyan-500 hover:underline">
                  {visibleDescriptionId === id ? 'Hide Description' : 'View Description'}
                </button>
                {visibleDescriptionId === id && (
                  <ul className="mt-4 list-disc list-inside">
                    {description.map((point, index) => (
                      <li key={index} className="text-gray-400">{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;