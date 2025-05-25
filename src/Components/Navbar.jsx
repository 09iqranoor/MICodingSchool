import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logolight from '../assets/logo-light.png';
import logo from '../assets/logo-mi.png';


const Navbar = ({darkMode}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full dark:bg-white   bg-[#0a0f1c]  shadow-md z-20">
      <div className="flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <div className="h-16 w-16">
          <img src={darkMode ? logolight : logo } alt="Logo" className="h-full w-full object-contain" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-6 dark:text-gray-900 text-white font-medium text-xl">
          <a href="#home" className="hover:text-red-500 transition">Home</a>
          <a href="#skills" className="hover:text-red-500 transition">Mentors</a>
          <a href="#Projects" className="hover:text-red-500 transition">Courses</a>
          <a href="#experience" className="hover:text-red-500 transition">Our Works</a>
          {/* <a href="#About" className="hover:text-red-500 transition"></a> */}
          <a href="#Contact" className="hover:text-red-500 transition">Contact</a>
        </nav>

        {/* Enroll Button (Desktop Only) */}
        <button className="hidden lg:block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500">
          Enroll Now
        </button>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-2xl text-red-700" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`lg:hidden dark:bg-white   bg-[#0a0f1c] overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'}`}>
        <nav className="flex flex-col gap-4 items-center dark:text-gray-900 text-white font-medium">
          <a href="#home" onClick={toggleMenu} className="hover:text-red-500 transition">Home</a>
          <a href="#skills" onClick={toggleMenu} className="hover:text-red-500 transition">Skills</a>
          <a href="#Projects" onClick={toggleMenu} className="hover:text-red-500 transition">Projects</a>
          <a href="#experience" onClick={toggleMenu} className="hover:text-red-500 transition">Experience</a>
          <a href="#About" onClick={toggleMenu} className="hover:text-red-500 transition">About Me</a>
          <a href="#Contact" onClick={toggleMenu} className="hover:text-red-500 transition">Contact</a>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500">
            Enroll Now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
