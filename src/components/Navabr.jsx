// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold primary-color ml-4">J. DOE</h1>
      <ul className="hidden md:flex">
        <li className="p-5"><a href="#home">Home</a></li>
        <li className="p-5"><a href="#about">About</a></li>
        <li className="p-5"><a href="#resume">Resume</a></li>
        <li className="p-5"><a href="#projects">Projects</a></li>
        <li className="p-5"><a href="#contact">Contact</a></li>
      </ul>

      <button
        onClick={handleNav}
        className="block md:hidden p-4"
        aria-label="Toggle navigation"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </button>

      <div
        className={`fixed top-0 h-full w-[60%] bg-[#202121] ease-in-out duration-500 ${
          nav ? 'left-0' : 'left-[-100%]'
        }`}
      >
        <h1 className="text-3xl primary-color m-4">J. DOE</h1>
        <ul className="p-8 text-2xl">
          <li className="p-5"><a href="#home">Home</a></li>
          <li className="p-5"><a href="#about">About</a></li>
          <li className="p-5"><a href="#resume">Resume</a></li>
          <li className="p-5"><a href="#projects">Projects</a></li>
          <li className="p-5"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;