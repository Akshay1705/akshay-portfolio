import React from 'react'
import myPhoto from '../assets/myPhoto.jpg' // or another image if preferred

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[#0D1117] text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Image */}
        <div className="flex-1" data-aos="fade-right">
          <img
            src={myPhoto}
            alt="Akshay Parekh"
            className="rounded-lg w-80 h-auto mx-auto shadow-lg border-2 border-blue-500"
          />
        </div>

        {/* Right Text */}
        <div className="flex-1" data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-500">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            I'm <span className="text-blue-400 font-medium">Akshay Parekh</span>, a passionate full-stack developer based in Gujarat, India. Currently pursuing B.Tech in Computer Science at Parul University.
          </p>
          <p className="text-lg mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
          I specialize in developing backend systems using Laravel, and I’m currently expanding my skills in modern frontend technologies like React.
          </p>
          <p className="text-lg mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
            I believe in continuous learning and building projects that make an impact. Whether it's frontend design or backend logic — I'm always ready to code it out 💻🔥
          </p>
        </div>

      </div>
    </section>
  )
}

export default About
