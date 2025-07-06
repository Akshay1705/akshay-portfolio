import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaGitAlt,
  FaJava,
  FaEnvelope,
  FaCube,
  FaMagic,
  FaBolt,
  FaBootstrap,FaPython, FaCuttlefish,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiVuedotjs,
  SiPostman,
  SiPhpmyadmin,
} from 'react-icons/si'

import { TbApi } from 'react-icons/tb'

const skills = [
  { id: 1, name: 'C++', icon: <FaCuttlefish className="text-blue-800" />, category: 'Languages' },
  { id: 2, name: 'HTML', icon: <FaHtml5 className="text-orange-600" />, category: 'Languages' },
  { id: 3, name: 'CSS', icon: <FaCss3Alt className="text-blue-600" />, category: 'Languages' },
  { id: 4, name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, category: 'Languages' },
  { id: 5, name: 'PHP', icon: <FaPhp className="text-indigo-700" />, category: 'Languages' },
  { id: 6, name: 'Python', icon: <FaPython className="text-yellow-500" />, category: 'Languages' },
  { id: 7, name: 'Java', icon: <FaJava className="text-red-600" />, category: 'Languages' },
  { id: 8, name: 'SQL', icon: <SiMysql className="text-blue-700" />, category: 'Languages' },

  { id: 9, name: 'React', icon: <FaReact className="text-cyan-400" />, category: 'Frontend' },
  { id: 10, name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" />, category: 'Frontend' },
  { id: 11, name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" />, category: 'Frontend' },
  { id: 12, name: 'Vue.js', icon: <SiVuedotjs className="text-green-400" />, category: 'Frontend' },
  { id: 13, name: 'AOS Animations', icon: <FaMagic className="text-pink-400" />, category: 'Frontend' },
  { id: 14, name: '3D UI (Three.js)', icon: <FaCube className="text-cyan-600" />, category: 'Frontend' },

  { id: 15, name: 'Laravel', icon: <FaLaravel className="text-red-600" />, category: 'Backend' },
  { id: 16, name: 'Core PHP', icon: <FaPhp className="text-indigo-700" />, category: 'Backend' },
  { id: 17, name: 'JSP / Servlet', icon: <FaJava className="text-red-500" />, category: 'Backend' },
  { id: 18, name: 'Node.js', icon: <FaNodeJs className="text-green-600" />, category: 'Backend' },
  { id: 19, name: 'Express.js', icon: <SiExpress className="text-gray-600" />, category: 'Backend' },

  { id: 20, name: 'MySQL', icon: <SiMysql className="text-blue-700" />, category: 'Database' },
  { id: 21, name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, category: 'Database' },

  { id: 23, name: 'REST APIs', icon: <TbApi className="text-green-600" />, category: 'API' },
  { id: 24, name: 'EmailJS', icon: <FaEnvelope className="text-red-500" />, category: 'API' },
  { id: 25, name: 'Postman', icon: <SiPostman className="text-orange-500" />, category: 'API' },

  { id: 26, name: 'Git', icon: <FaGitAlt className="text-orange-500" />, category: 'Tools' },
  { id: 27, name: 'VS Code', icon: <FaReact className="text-blue-500" />, category: 'Tools' },
  { id: 28, name: 'XAMPP', icon: <FaPhp className="text-orange-400" />, category: 'Tools' },
  { id: 29, name: 'Tomcat', icon: <FaJava className="text-gray-500" />, category: 'Tools' },
  { id: 30, name: 'Vite', icon: <FaBolt className="text-yellow-500" />, category: 'Tools' },
  { id: 31, name: 'phpMyAdmin', icon: <SiPhpmyadmin className="text-orange-600" />, category: 'Tools' },

  
]


export default skills
