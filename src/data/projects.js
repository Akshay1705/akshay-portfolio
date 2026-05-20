import soulScriptImg from "../assets/projects/soulscript.png";
import mediDeskImg from "../assets/projects/medidesk.png";
import weatherAppImg from "../assets/projects/wetherapp.png";
import talestogo from "../assets/projects/talestogo.png";
import wishcraft from "../assets/projects/wishcraft.png";
import captionAi from "../assets/projects/captionai.png";
import pselitegroupImg from '../assets/projects/pselitegroup.png'
import itineraryImg from '../assets/projects/itinerary.png'

const projects = [
  {
    id: 1,
    title: "SoulScript - Personal Journaling App",
    tech: "Core PHP + MySQL",
    tags: ["PHP"],
    date: "june 2025",
    type: "personal",
    description:
      "A personal journaling app to write thoughts securely with a clean interface.",
    image: soulScriptImg,
    github: "https://github.com/Akshay1705/SoulScript.git",
  },
  {
    id: 2,
    title: "MediDesk - Clinic Appointment Management",
    tech: "Laravel + Inertia.js + Vue + TailwindCSS",
    tags: ["Laravel"],
    date: "Nov 2025",
    type: "personal",
    description:
      "An online appointment and patient management system for clinics and hospitals.",
    image: mediDeskImg,
    github: "https://github.com/Akshay1705/medidesk.git",
  },
  {
    id: 3,
    title: "Weather App (JSP + Servlet)",
    tech: "JSP + Servlet + Java + OpenWeatherMap API",
    tags: ["Java"],
    date: "July 2025",
    type: "personal",
    description:
      "A dynamic weather forecast application built using JSP and Servlets that fetches real-time weather data.",
    image: weatherAppImg,
    github: "https://github.com/Akshay1705/WeatherApp",
  },
  {
    id: 4,
    title: "TalesToGo - Adventure Bookstore",
    tech: "React.js + Tailwind CSS + AOS",
    tags: ["React"],
    date: "July 2025",
    type: "personal",
    description:
      "A responsive adventure-themed bookstore frontend with dark mode, dynamic hero section, and popup-based order form.",
    image: talestogo,
    link: "https://talestogo.vercel.app/",
    github: "https://github.com/Akshay1705/book-store",
  },
  {
    id: 5,
    title: "WishCraft - Bucket List Manager",
    tech: "MERN Stack (React, Node.js, Express, MongoDB) + Tailwind CSS",
    tags: ["MERN", "React"],
    date: "Aug 2025",
    type: "personal",
    description:
      "A full-stack bucket list management app with user authentication, add/update/delete wishes, filtering, status tracking, and pagination.",
    image: wishcraft,
    link: "https://wishcraft-frontend.vercel.app/",
    github: "https://github.com/Akshay1705/wishcraft-backend",
  },
  {
    id: 6,
    title: "Caption.ai - AI-Powered Social Media Assistant",
    tech: "Next.js + TypeScript + Supabase + Gemini",
    tags: ["Next.js", "AI"],
    date: "Oct 2025",
    type: "personal",
    description:
      "An AI tool that instantly generates creative captions, hashtags, and song suggestions for your social media posts from just a single photo.",
    image: captionAi,
    link: "https://caption-ai-ten.vercel.app/",
    github: "https://github.com/Akshay1705/caption-ai",
  },
  {
    id: 7,
    title: "PSEliteGroup – Business Website",
    tech: "Next.js, Tailwind CSS, Resend (Email API), Vercel",
    tags: ["Next.js", "Resend"],
    date: "April 2026",
    type: "freelance",
    description:
      "Developed and deployed a production-ready business website with a functional contact system using Resend email API, custom domain integration, and optimized performance on Vercel.",
    image: pselitegroupImg,
    link: "https://pselitegroup.com/",
    github: "",
  },
  {
    id: 8,
    title: "Voyager AI — Plan Smarter Journeys with AI",
    tech: "Next.js, Python, Django, Gemini API",
    tags: ["Next.js", "Django"],
    date: "Dec 2025",
    type: "personal",
    description:
      "An AI-powered travel planning platform that helps users plan smarter journeys through personalized itinerary generation. Built with Next.js, Django, and Gemini API, featuring intelligent recommendations, dynamic backend processing, responsive UI, and deployed full-stack architecture.",
    image: itineraryImg,
    link: "https://voyager-ai-lilac.vercel.app/",
    github: "https://github.com/Akshay1705/AI-itinerary-generator",
  },
];

export default projects;
