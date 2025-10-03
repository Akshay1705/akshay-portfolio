import { useState, useEffect } from 'react'
import DarkPng from '../assets/dark-mode-button.png'
import LightPng from '../assets/light-mode-button.png'

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (isDarkMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode);
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="relative w-10 h-5">
      {/* Light Mode Icon */}
      <img
        src={LightPng}
        alt="Switch to dark mode"
        onClick={toggleMode}
        className={`absolute top-0 right-0 w-10 h-5 cursor-pointer transition-opacity duration-300 
          ${isDarkMode === "dark" ? "opacity-0" : "opacity-100"}
        `}
      />

      {/* Dark Mode Icon */}
      <img
        src={DarkPng}
        alt="Switch to light mode"
        onClick={toggleMode}
        className={`absolute top-0 right-0 w-10 h-5 cursor-pointer transition-opacity duration-300 
          ${isDarkMode === "dark" ? "opacity-100" : "opacity-0"}
        `}
      />
    </div>
  )
}

export default DarkMode
