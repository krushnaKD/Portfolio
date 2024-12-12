import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // You can use icons for social media

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 ">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h4 className="text-lg font-semibold">Contact Me</h4>
            <p className="text-sm">krushnaankade5@gmail.com</p>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <a className="hover:bg-gray-400 transition p-2 rounded-md" href="https://github.com/krushnaKD" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={30} />
            </a>
            <a className="hover:bg-sky-400 transition p-2 rounded-md" href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={30} />
            </a>
            <a className="hover:bg-sky-400  transition p-2 rounded-md" href="https://x.com/krushna_KD1" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter size={30} />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
