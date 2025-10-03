import React from 'react'
import DarkMode from './DarkMode.jsx'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-black shadow-md z-50 transition-colors duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero">
          <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400 cursor-pointer">
            Akshay.dev
          </h1>
        </a>

        {/* Nav + Toggle */}
        <div className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6 font-medium text-gray-600 dark:text-gray-300">
            <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>

          {/* Dark/Light Toggle */}
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
