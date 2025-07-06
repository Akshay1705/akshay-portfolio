import soulScriptImg from '../assets/projects/soulscript.png'
import mediDeskImg from '../assets/projects/medidesk.png'
import weatherAppImg from '../assets/projects/wetherapp.png'

const projects = [
  {
    id: 1,
    title: 'SoulScript',
    tech: 'Core PHP + MySQL',
    description: 'A personal journaling app to write thoughts securely with a clean interface.',
    image: soulScriptImg,
    link: 'http://your-demo-link.com', // Optional
    github: 'https://github.com/Akshay1705/SoulScript.git'
  },
  {
    id: 2,
    title: 'MediDesk',
    tech: 'Laravel + Inertia.js + Vue + TailwindCSS',
    description: 'An online appointment and patient management system for clinics and hospitals.',
    image: mediDeskImg,
    link: 'http://your-demo-link.com', // Optional
    github: 'https://github.com/Akshay1705/medidesk.git'
  },
  {
    id: 3,
    title: 'Weather App',
    tech: 'JSP + Servlet + Java + OpenWeatherMap API',
    description: 'A dynamic weather forecast application built using JSP and Servlets that fetches real-time weather data.',
    image: weatherAppImg,
    link: 'http://your-demo-link.com', // Optional
    github: 'https://github.com/your-username/weather-app-jsp'
  },
]

export default projects
