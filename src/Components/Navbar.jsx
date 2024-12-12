import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <Link to="/" className="text-2xl font-bold">
          MyPortfolio
        </Link>
        <nav>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link
                to="/ProjectsSection"
                className="hover:text-teal-400 transition text-lg"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/SkillsSection"
                className="hover:text-teal-400 transition text-lg"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-teal-400 transition text-lg"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-teal-400 transition text-lg"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-700">
          <ul className="space-y-4 p-4">
            <li>
              <a href="#about" className="block hover:text-teal-400">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="block hover:text-teal-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="block hover:text-teal-400">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="block hover:text-teal-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
