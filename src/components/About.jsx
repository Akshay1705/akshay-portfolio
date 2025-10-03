import React from 'react'
import myPhoto from '../assets/myPhoto.jpg' // or another image if preferred

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-[#0D1117] text-gray-800 dark:text-gray-200"
    >
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-500">
            About Me
          </h2>

          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            I'm <span className="text-blue-400 font-medium">Akshay Parekh</span>
            , a curious builder and problem-solver from Gujarat, India.
            Currently pursuing my B.Tech in Computer Science at Parul
            University, I thrive on turning ideas into impactful digital
            products.
          </p>

          <p className="text-lg mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
            I believe in{" "}
            <span className="font-medium text-blue-400">
              finishing what I start
            </span>
            , in learning by building, and in constantly pushing myself to grow.
            My projects aren’t just code — they’re experiments, challenges, and
            steps toward becoming an engineer who builds tools that matter.
          </p>

          <p className="text-lg mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
            For me, tech isn’t only about frameworks or syntax — it’s about
            creating something meaningful, whether it’s simplifying tasks,
            sparking creativity, or helping people in real life.
          </p>

          <p className="text-lg mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
            Outside of coding, I enjoy reflecting on the bigger picture of life
            and future possibilities, and I’m driven by the vision of shaping
            myself into a professional who’s always
            <span className="font-medium text-blue-400">
              {" "}
              curious, disciplined, and resilient
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default About
