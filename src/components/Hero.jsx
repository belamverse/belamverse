import React from 'react'
import Stars from './Stars';

function Hero() {
  return (
    <section
      className="relative text-center py-40 overflow-hidden bg-cover bg-center"
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-gray-900 opacity-70 z-0"></div>
      
      {/* The stars component is imported and used here */}
      <Stars />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
          Welcome to BelamVerse
        </h2>
        <p className="text-gray-300 text-xl md:text-2xl font-light tracking-wide mb-8">
          A universe of creative tools crafted with care.
        </p>
      </div>
    </section>
  );
}


export default Hero