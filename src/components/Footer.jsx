import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#0D1117] text-gray-700 dark:text-gray-400 py-6 mt-3">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Text */}
        <p className="text-center md:text-left text-sm">
          © {new Date().getFullYear()} <span className="text-blue-500 font-semibold">Akshay Parekh</span>. All rights reserved.
        </p>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://www.linkedin.com/in/akshay-parekh1705/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Akshay1705"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 dark:hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:parekhakshay25@email.com"
            className="hover:text-red-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
