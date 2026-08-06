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
  FaBootstrap,
  FaPython,
  FaCuttlefish,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiVuedotjs,
  SiPostman,
  SiPhpmyadmin,
  SiNextdotjs,
  SiSupabase,
  SiShadcnui,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills = [
  // ── Row 1: Languages + Frontend ──────────────────
  {
    id: 1,
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500" />,
    row: 1,
  },
  { id: 2, name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, row: 1 },
  {
    id: 3,
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400" />,
    row: 1,
  },
  { id: 4, name: "PHP", icon: <FaPhp className="text-indigo-500" />, row: 1 },
  {
    id: 5,
    name: "Python",
    icon: <FaPython className="text-yellow-500" />,
    row: 1,
  },
  { id: 6, name: "Java", icon: <FaJava className="text-red-500" />, row: 1 },
  {
    id: 7,
    name: "C++",
    icon: <FaCuttlefish className="text-blue-700" />,
    row: 1,
  },
  { id: 8, name: "React", icon: <FaReact className="text-cyan-400" />, row: 1 },
  {
    id: 9,
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    row: 1,
  },
  {
    id: 10,
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400" />,
    row: 1,
  },
  {
    id: 11,
    name: "shadcn/ui",
    icon: <SiShadcnui className="text-black dark:text-white" />,
    row: 1,
  },
  {
    id: 12,
    name: "Bootstrap",
    icon: <FaBootstrap className="text-purple-500" />,
    row: 1,
  },
  {
    id: 13,
    name: "Vue.js",
    icon: <SiVuedotjs className="text-green-400" />,
    row: 1,
  },

  // ── Row 2: Backend + Database ─────────────────────
  {
    id: 14,
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500" />,
    row: 2,
  },
  {
    id: 15,
    name: "Express.js",
    icon: <SiExpress className="text-gray-500" />,
    row: 2,
  },
  {
    id: 16,
    name: "Laravel",
    icon: <FaLaravel className="text-red-500" />,
    row: 2,
  },
  {
    id: 17,
    name: "Core PHP",
    icon: <FaPhp className="text-indigo-400" />,
    row: 2,
  },
  {
    id: 18,
    name: "MySQL",
    icon: <SiMysql className="text-blue-600" />,
    row: 2,
  },
  {
    id: 19,
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500" />,
    row: 2,
  },
  {
    id: 20,
    name: "REST APIs",
    icon: <TbApi className="text-green-500" />,
    row: 2,
  },
  {
    id: 21,
    name: "Gemini API",
    icon: <span className="text-lg">✨</span>,
    row: 2,
  },
  {
    id: 22,
    name: "EmailJS",
    icon: <FaEnvelope className="text-red-400" />,
    row: 2,
  },
  {
    id: 23,
    name: "Supabase",
    icon: <SiSupabase className="text-green-400" />,
    row: 2,
  },

  // ── Row 3: Tools + Platforms ──────────────────────
  {
    id: 24,
    name: "Git",
    icon: <FaGitAlt className="text-orange-500" />,
    row: 3,
  },
  {
    id: 25,
    name: "Postman",
    icon: <SiPostman className="text-orange-400" />,
    row: 3,
  },
  {
    id: 26,
    name: "Vite",
    icon: <FaBolt className="text-yellow-400" />,
    row: 3,
  },
  {
    id: 27,
    name: "Vercel",
    icon: (
      <span className="font-bold text-lg text-black dark:text-white">▲</span>
    ),
    row: 3,
  },
  { id: 28, name: "Render", icon: <span className="text-lg">🚀</span>, row: 3 },
  {
    id: 29,
    name: "MongoDB Atlas",
    icon: <SiMongodb className="text-green-400" />,
    row: 3,
  },
  {
    id: 30,
    name: "3D UI (Three.js)",
    icon: <FaCube className="text-cyan-500" />,
    row: 3,
  },
  {
    id: 31,
    name: "phpMyAdmin",
    icon: <SiPhpmyadmin className="text-orange-500" />,
    row: 3,
  },
];

export default skills;