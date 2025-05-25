// HeroSection.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

import { Typewriter } from 'react-simple-typewriter';

import { FaGithub, FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact } from "react-icons/fa";
export default function HeroSection({darkMode}) {
  return (
    <section className="bg-white min-h-screen dark:bg-[#0a0f1c] transition-colors duration-500">
      <div className="relative text-gray-900 dark:text-white min-h-screen flex justify-center items-center overflow-hidden rounded-t-[2rem] px-6 py-10">
        {/* <img src={darkMode ?  logo : logolight} alt="Logo" className="absolute top-6 left-6 w-20 h-auto z-20" /> */}
        <div className="text-center relative z-10 max-w-3xl">
          <p className="uppercase font-bold underline text-sm tracking-widest text-red-400 dark:text-red-600 mb-4">
          <Typewriter
              words={[
                'Welcome to MICODINGSCHOOL...',
                'Online web development Academy....',
                'Make Your future bright....'
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <h1 className="text-3xl md:text-6xl font-bold leading-tight uppercase">
            Empowering Future Developers, <br className="hidden md:block" /> One Line of Code at a Time
          </h1>
          <p className="text-gray-700 dark:text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Join our online web development academy and gain hands-on experience in HTML, CSS, JavaScript, React, Node.js, and more.
          </p>
          <button className="mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300">
            Start Learning Today →
          </button>
        </div>

        <svg className="absolute inset-0 hidden md:block w-full dark:text-gray-700 text-gray-300 h-full z-0" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100%" cy="0" r="200" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="100%" cy="0" r="300" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="100%" cy="0" r="400" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="100%" cy="0" r="500" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
          
     

        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars  radius={50} count={500} factor={6} fade speed={10} color={darkMode ? '#ffffff' : '#000000'} />
          </Canvas>
        </div>
      </div>
    </section> 
  );
}
 