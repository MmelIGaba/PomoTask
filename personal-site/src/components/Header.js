import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-green-900 text-white shadow z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold">MsgWebWorks</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-green-300">Home</a></li>
            <li><a href="#about" className="hover:text-green-300">About</a></li>
            <li><a href="#projects" className="hover:text-green-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-green-300">Contact</a></li>
          </ul>
        </nav>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-green-900">
          <ul className="flex flex-col space-y-2 py-4 px-6">
            <li><a href="#home" className="hover:text-green-300" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" className="hover:text-green-300" onClick={toggleMenu}>About</a></li>
            <li><a href="#projects" className="hover:text-green-300" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" className="hover:text-green-300" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
