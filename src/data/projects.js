import soulScriptImg from '../assets/projects/soulscript.png'
import mediDeskImg from '../assets/projects/medidesk.png'
import weatherAppImg from '../assets/projects/wetherapp.png'
import talestogo from '../assets/projects/talestogo.png'

const projects = [
  {
    id: 1,
    title: "SoulScript - Personal Journaling App",
    tech: "Core PHP + MySQL",
    description:
      "A personal journaling app to write thoughts securely with a clean interface.",
    image: soulScriptImg,
    // link: "http://your-demo-link.com", // Optional
    github: "https://github.com/Akshay1705/SoulScript.git",
  },
  {
    id: 2,
    title: "MediDesk - Clinic appointment management",
    tech: "Laravel + Inertia.js + Vue + TailwindCSS",
    description:
      "An online appointment and patient management system for clinics and hospitals.",
    image: mediDeskImg,
    // link: "http://your-demo-link.com", // Optional
    github: "https://github.com/Akshay1705/medidesk.git",
  },
  {
    id: 3,
    title: "Weather App (JSP + Servlet)",
    tech: "JSP + Servlet + Java + OpenWeatherMap API",
    description:
      "A dynamic weather forecast application built using JSP and Servlets that fetches real-time weather data.",
    image: weatherAppImg,
    // link: "http://your-demo-link.com", // Optional
    github: "https://github.com/your-username/weather-app-jsp",
  },
  {
    id: 4,
    title: "TalesToGo - Adventure Bookstore",
    tech: "React.js + Tailwind CSS + AOS + Responsive UI",
    description:
      "A responsive adventure-themed bookstore frontend with dark mode, dynamic hero section, and popup-based order form.",
    image: talestogo,
    link: "https://talestogo.vercel.app/",
    github: "https://github.com/Akshay1705/book-store.git",
  },
];

export default projects
