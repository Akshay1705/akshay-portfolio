import React, { useState } from 'react'
import Modal from 'react-modal'
import projects from '../data/projects'

// Required for accessibility
Modal.setAppElement('#root')

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeImage, setActiveImage] = useState(null)

  const openModal = (image) => {
    setActiveImage(image)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setActiveImage(null)
  }

  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-[#0D1117] text-gray-800 dark:text-gray-200"
    >
      <div className="container mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-blue-500 mb-2"
          data-aos="fade-up"
        >
          Projects
        </h2>
        <p
          className="text-center text-gray-600 dark:text-gray-400 text-md md:text-lg mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          A collection of real-world applications I’ve built using modern
          technologies like React, Laravel, PHP, and more. Each project reflects
          my hands-on experience and passion for problem solving.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={project.id * 100}
            >
              <img
                src={project.image}
                alt={project.title}
                onClick={() => openModal(project.image)}
                className="w-full max-h-64 object-contain bg-white dark:bg-black p-2 cursor-pointer hover:scale-105 transition-transform duration-300"
              />

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-blue-600">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-2 text-gray-500 dark:text-gray-400 italic">
                    {project.tech}
                  </p>
                  <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Buttons fixed at bottom */}
                <div className="mt-auto flex gap-3 pt-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition w-full text-center"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition w-full text-center"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Project Screenshot"
          className="max-w-5xl mx-auto my-20 bg-white dark:bg-black p-4 rounded shadow-lg outline-none relative"
          overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
        >
          <button
            onClick={closeModal}
            className="absolute top-2 right-3 text-xl text-gray-600 bg-amber-50 hover:text-red-500"
          >
            ✕
          </button>
          {activeImage && (
            <img
              src={activeImage}
              alt="Project Full"
              className="w-full max-h-[80vh] object-contain mx-auto"
            />
          )}
        </Modal>
      </div>
    </section>
  );
}

export default Projects
