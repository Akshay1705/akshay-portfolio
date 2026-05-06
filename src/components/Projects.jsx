import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from 'react-modal'
import { FiExternalLink, FiGithub, FiX, FiCalendar } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi'
import projects from '../data/projects'
import { fadeUp, staggerContainer, scaleIn, viewport } from '../utils/motion'

Modal.setAppElement('#root')

const filters = ['All', 'PHP', 'Laravel', 'React', 'MERN', 'Next.js', 'Django', 'Java']

const Projects = () => {
  const [active, setActive]               = useState('All')
  const [selectedProject, setSelected]   = useState(null) // detail modal
  const [activeImage, setActiveImage]     = useState(null) // image zoom modal

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => Array.isArray(p.tags) && p.tags.includes(active))

  const openDetail  = (project) => setSelected(project)
  const closeDetail = () => setSelected(null)
  const openZoom    = (img, e) => { e.stopPropagation(); setActiveImage(img) }
  const closeZoom   = () => setActiveImage(null)

  return (
    <section
      id="projects"
      className="py-24 bg-gray-50 dark:bg-[#0A0A0F] text-gray-800 dark:text-gray-200"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mb-14"
        >
          <motion.h2
            variants={fadeUp(0)}
            className="text-3xl md:text-4xl font-bold section-heading-center"
          >
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            variants={fadeUp(0.1)}
            className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto text-sm"
          >
            Real-world applications built with modern technologies. Click any card to explore.
          </motion.p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                active === f
                  ? 'bg-indigo-500 border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                  : 'border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-500/50 hover:text-indigo-500'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <motion.div
          key={active}
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filtered.length === 0 ? (
            <motion.div
              variants={fadeUp(0)}
              className="col-span-3 text-center py-16 text-gray-400"
            >
              No projects found for this filter.
            </motion.div>
          ) : (
            filtered.map((project, i) => (
              <motion.div
                key={project.id}
                variants={scaleIn(i * 0.05)}
                onClick={() => openDetail(project)}
                className="group relative glass rounded-2xl overflow-hidden flex flex-col hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer"
              >
                {/* Freelance badge */}
                {project.type === 'freelance' && (
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-400/90 text-amber-900 shadow-md">
                    <HiSparkles size={11} />
                    Client Work
                  </div>
                )}

                {/* Image + hover overlay */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur">
                      View Details →
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                      <FiCalendar size={10} /> {project.date}
                    </span>
                    <div className="flex gap-1 flex-wrap justify-end">
                      {project.tags?.map(tag => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-indigo-400 mb-2 font-medium line-clamp-1">
                    {project.tech}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-grow line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>

      {/* ── Detail Modal ───────────────────────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDetail}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white dark:bg-[#0F0F1A] border border-indigo-500/20 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={closeDetail}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 flex items-center justify-center text-gray-700 dark:text-white transition"
              >
                <FiX size={16} />
              </button>

              <div className="flex flex-col md:flex-row">

                {/* Left: Image */}
                <div
                  className="md:w-1/2 relative bg-gray-100 dark:bg-black cursor-zoom-in"
                  onClick={(e) => openZoom(selectedProject.image, e)}
                >
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  {/* Freelance badge inside modal */}
                  {selectedProject.type === 'freelance' && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-400/90 text-amber-900 shadow-md">
                      <HiSparkles size={11} />
                      Client Work
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 text-xs text-white/60 bg-black/40 px-2 py-1 rounded-full backdrop-blur">
                    Click to zoom
                  </div>
                </div>

                {/* Right: Details */}
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    {/* Date + tags */}
                    <div className="flex items-center gap-2 flex-wrap mb-3">
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <FiCalendar size={10} /> {selectedProject.date}
                      </span>
                      {selectedProject.tags?.map(tag => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                      {selectedProject.title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                      {selectedProject.description}
                    </p>

                    {/* Tech stack */}
                    <div className="mb-6">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.split(/[+|,]/).map(t => t.trim()).filter(Boolean).map(t => (
                          <span
                            key={t}
                            className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 flex-wrap">
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition"
                      >
                        <FiExternalLink size={14} /> Live Demo
                      </a>
                    )}
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-indigo-500/50 hover:text-indigo-500 text-sm font-medium transition"
                      >
                        <FiGithub size={14} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Image Zoom Modal ───────────────────────────────────── */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeZoom}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <button
                onClick={closeZoom}
                className="absolute -top-10 right-0 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
              >
                <FiX size={16} />
              </button>
              <img
                src={activeImage}
                alt="Project Zoom"
                className="w-full max-h-[85vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}

export default Projects