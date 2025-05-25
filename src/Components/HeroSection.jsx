import React from 'react';
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import logo from '../assets/logo-mi.png';
export default function HeroSection() {
  return (
     <section className='bg-[#0a0f1c]  '>
    <div className="relative  text-white min-h-screen flex justify-center items-center  overflow-hidden rounded-t-[2rem] px-6 py-10">
    <img 
          src={logo} 
          alt="Logo" 
          className="absolute top-6 left-6 w-20 h-auto z-20"
        />

      {/* Main Text */}
      <div className="text-center relative z-10">
      <p className="uppercase text-sm tracking-widest text-red-400 mb-4">
  Online Web Development Academy
</p> 
  <h1 className="text-3xl md:text-6xl font-bold leading-tight">
    Empowering Future Developers, <br className="hidden md:block" /> One Line of Code at a Time
  </h1>
  <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
    Join our online web development academy and gain hands-on experience in HTML, CSS, JavaScript, React, Node.js, and more. Whether you're a complete beginner or looking to advance your skills, we’ve got expert-led courses and real-world projects to level you up — anytime, anywhere.
  </p>
  <button className="mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300">
    Start Learning Today →
  </button>
</div>

      {/* Background SVG Orbits */}
      <svg className="absolute inset-0 hidden md:block  w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100%" cy="0" r="200" stroke="#333" strokeWidth="2" fill="none" />
        <circle cx="100%" cy="0" r="300" stroke="#333" strokeWidth="2" fill="none" />
        <circle cx="100%" cy="0" r="400" stroke="#333" strokeWidth="2" fill="none" />
        <circle cx="100%" cy="0" r="500" stroke="#333" strokeWidth="2" fill="none" />
      </svg>   

     
    </div>
  <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={1200} factor={6} fade speed={11} />
        </Canvas>
      </div>
    </section>  
  );
}
