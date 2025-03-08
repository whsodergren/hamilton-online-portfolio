import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useSocialLinks } from "./SocialLinksContext";

const Contact = () => {
  const { isSidebarVisible } = useSocialLinks();

  const links = [
    {
      id: 1,
      child: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/hamiltonsodergren/",
    },
    {
      id: 2,
      child: <FaGithub size={30} />,
      href: "https://github.com/whsodergren",
    },
    {
      id: 3,
      child: <BsFillPersonLinesFill size={30} />,
      href: "/resume.pdf",
      download: true,
    },
  ];

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto flex-grow">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/apjnzwna"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Social Links - Only visible when sidebar is hidden */}
      {!isSidebarVisible && (
        <div className="flex justify-center space-x-6 pb-4">
          {links.map(({ id, child, href, download }) => (
            <a
              key={id}
              href={href}
              className="text-white bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition duration-300"
              download={download}
              target="_blank"
              rel="noopener noreferrer"
            >
              {child}
            </a>
            
          ))}
          
        </div>
      )}
    </div>
  );
};

export default Contact;
