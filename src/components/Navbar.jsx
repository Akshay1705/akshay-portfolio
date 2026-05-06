import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DarkMode from './DarkMode'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const links = [
  { label: 'Home',     href: '#hero'     },
  { label: 'About',    href: '#about'    },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Contact',  href: '#contact'  },
]

const Navbar = () => {
  const [scrolled,  setScrolled]  = useState(false)
  const [active,    setActive]    = useState('#hero')
  const [menuOpen,  setMenuOpen]  = useState(false)

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section detection — scroll position based (works for ANY section height)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120 // offset for navbar height

      let current = '#hero'
      links.forEach(link => {
        const section = document.querySelector(link.href)
        if (section && section.offsetTop <= scrollY) {
          current = link.href
        }
      })
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // run once on mount to set initial active
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#0A0A0F]/80 backdrop-blur-md shadow-lg shadow-black/5 border-b border-gray-200/50 dark:border-indigo-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#hero">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold gradient-text"
          >
            Akshay.dev
          </motion.span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setActive(link.href)}
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    active === link.href
                      ? 'text-indigo-500'
                      : 'text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400'
                  }`}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full bg-indigo-500"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <DarkMode />
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <DarkMode />
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="text-gray-700 dark:text-gray-300 text-2xl"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-[#0F0F1A]/95 backdrop-blur-md border-t border-gray-200/50 dark:border-indigo-500/10"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => { setActive(link.href); setMenuOpen(false) }}
                    className={`text-sm font-medium transition-colors ${
                      active === link.href
                        ? 'text-indigo-500'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar