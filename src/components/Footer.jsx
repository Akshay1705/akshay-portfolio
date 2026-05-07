import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { fadeUp, viewport } from "../utils/motion";

const Footer = () => (
  <footer className="relative bg-white dark:bg-[#0D1117] border-t border-gray-200 dark:border-white/5 py-8 overflow-hidden">
    <div className="absolute inset-0 z-0 indigo-grid pointer-events-none opacity-50" />
    <motion.div
      variants={fadeUp(0)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10"
    >
      <p className="text-sm text-gray-500 dark:text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="gradient-text font-semibold">Akshay Parekh</span>.{" "}
        Built with React & Framer Motion.
      </p>

      <div className="flex gap-5 text-lg text-gray-400">
        {[
          {
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/akshay-parekh1705/",
            hover: "hover:text-blue-500",
          },
          {
            icon: FaGithub,
            href: "https://github.com/Akshay1705",
            hover: "hover:text-black-500 dark:hover:text-white",
          },
          {
            icon: FaEnvelope,
            href: "mailto:parekhakshay25@email.com",
            hover: "hover:text-red-400",
          },
        ].map(({ icon, href, hover }) => {
          const Icon = icon;
          return (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.15 }}
              className={`transition-colors duration-200 ${hover}`}
            >
              <Icon />
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  </footer>
);

export default Footer;
