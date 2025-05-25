// App.js
import React, { useState, useEffect } from 'react';
import HeroSection from './Components/HeroSection';
import { FaMoon, FaSun } from 'react-icons/fa';
import Navbar from './Components/Navbar';
export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-24 right-5  p-2 rounded z-50"
      >
        {darkMode ? <FaSun size={20} className=' text-yellow-300' /> : <FaMoon className='text-black' size={20} />}
      </button>
      <Navbar darkMode={darkMode} />
      <HeroSection   />
      
    </>
  );
}
