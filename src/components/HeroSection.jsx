import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-neutral-50 text-center py-20">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800">All your PDF tools in one place</h1>
      <p className="text-xl text-gray-600 mt-4">The easiest way to manage your PDF files.</p>
      <button className="bg-primary text-white font-bold py-3 px-8 rounded-full mt-8 hover:bg-red-700 transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default HeroSection;
