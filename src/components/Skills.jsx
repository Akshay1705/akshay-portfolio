import React, { useState } from 'react'
import skills from '../data/skills'

const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Database', 'API', 'Tools' , 'Platforms']

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredSkills =
    selectedCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory)

  return (
    <section id="skills" className="py-20 bg-white dark:bg-[#0D1117]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-500 mb-4" data-aos="fade-up">
          Skills
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full border-2 text-sm font-medium ${
                selectedCategory === cat
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'text-blue-500 border-blue-300 hover:bg-blue-100'
              } transition duration-200`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.id}
              className="flex flex-col items-center gap-2 p-4 rounded-lg hover:shadow-md hover:scale-105 transition duration-300 bg-gray-100 dark:bg-gray-900"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
