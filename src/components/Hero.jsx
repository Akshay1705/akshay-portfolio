import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import myPhoto from "../assets/myPhoto.png";
import { fadeUp, staggerContainer } from "../utils/motion";

// ── Magnetic button hook ──────────────────────────────────
const useMagnetic = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15 });
  const sy = useSpring(y, { stiffness: 150, damping: 15 });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.3);
    y.set((e.clientY - r.top - r.height / 2) * 0.3);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };
  return { sx, sy, onMove, onLeave };
};

// ── Floating code snippets data ───────────────────────────
const codeSnippets = [
  {
    text: "const dev = () =>",
    float: "float-1",
    top: "10%",
    left: "-22%",
    color: "#4f46e5",
    size: "12px",
  }, // darker indigo
  {
    text: "{ }",
    float: "float-2",
    top: "15%",
    right: "-22%",
    color: "#0d9488",
    size: "20px",
  }, // darker teal
  {
    text: "<Akshay />",
    float: "float-3",
    top: "75%",
    left: "-24%",
    color: "#7c3aed",
    size: "12px",
  }, // darker purple
  {
    text: "npm run dev",
    float: "float-4",
    top: "80%",
    right: "-22%",
    color: "#4f46e5",
    size: "11px",
  },
  {
    text: "=>",
    float: "float-5",
    top: "48%",
    left: "-20%",
    color: "#0d9488",
    size: "20px",
  },
  {
    text: 'git commit -m "🚀"',
    float: "float-6",
    top: "50%",
    right: "-30%",
    color: "#7c3aed",
    size: "10px",
  },
  {
    text: "return (",
    float: "float-2",
    top: "-10%",
    left: "15%",
    color: "#4f46e5",
    size: "12px",
  },
  {
    text: "[ ]",
    float: "float-3",
    top: "95%",
    right: "10%",
    color: "#0d9488",
    size: "16px",
  },
];

// ── Particle config ───────────────────────────────────────
const particleOptions = {
  fullScreen: false,
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      resize: { enable: true },
    },
    modes: { repulse: { distance: 80, duration: 0.4 } },
  },
  particles: {
    number: { value: 50, density: { enable: true, area: 900 } },
    color: { value: ["#6366f1", "#14b8a6", "#a855f7"] },
    opacity: {
      value: { min: 0.4, max: 0.8 }, // 👈 much more visible
      animation: { enable: true, speed: 0.6, sync: false },
    },
    size: { value: { min: 2, max: 4 } }, // 👈 bigger dots
    move: {
      enable: true,
      speed: 0.8, // 👈 slightly faster
      direction: "none",
      random: true,
      outModes: { default: "out" },
    },
    links: {
      enable: true,
      distance: 120,
      color: "#6366f1",
      opacity: 0.25, // 👈 more visible lines
      width: 1,
    },
  },
  detectRetina: true,
};

const Hero = () => {
  const [particlesReady, setParticlesReady] = useState(false);
  const mag1 = useMagnetic();
  const mag2 = useMagnetic();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setParticlesReady(true));
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gray-50 dark:bg-[#0A0A0F] flex items-center pt-20 overflow-hidden"
    >
      {/* ── BG Layer 1: Indigo grid ─────────────────────── */}
      <div className="absolute inset-0 z-0 indigo-grid pointer-events-none" />

      {/* ── BG Layer 2: Particles ───────────────────────── */}
      <div className="absolute inset-0 z-0">
        {particlesReady && (
          <Particles
            id="hero-particles"
            options={particleOptions}
            style={{ width: "100%", height: "100%" }}
          />
        )}
      </div>

      {/* ── BG Layer 3: Animated blobs ──────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="orb orb-indigo blob-1"
          style={{ width: 500, height: 500, top: "-120px", left: "-100px" }}
        />
        <div
          className="orb orb-teal blob-2"
          style={{ width: 400, height: 400, bottom: "-80px", right: "-80px" }}
        />
        <div
          className="orb orb-purple blob-3"
          style={{ width: 280, height: 280, top: "40%", left: "42%" }}
        />
      </div>

      {/* ── BG Layer 4: Vignette ────────────────────────── */}
      {/* <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 80%, rgba(248,250,252,0.85) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none dark:block hidden"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 80%, rgba(10,10,15,0.9) 100%)",
        }}
      /> */}

      {/* ── Main Content ────────────────────────────────── */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Left: Text */}
        <motion.div
          variants={staggerContainer(0.12, 0.3)}
          initial="hidden"
          animate="show"
          className="flex-1"
        >
          {/* Badge */}
          <motion.div variants={fadeUp(0)} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border border-indigo-500/30 bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp(0.1)}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-3"
          >
            Hi, I'm <span className="gradient-text">Akshay Parekh</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={fadeUp(0.2)}
            className="text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400 mb-6 h-10"
          >
            <Typewriter
              words={[
                "Full Stack Developer",
                "MERN & Laravel Enthusiast",
                "CSE @ Parul University",
                "Problem Solver",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp(0.3)}
            className="text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed mb-8"
          >
            Building modern web experiences with React, Node.js, Laravel and
            more. Passionate about clean code and impactful products.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp(0.4)} className="flex gap-4 flex-wrap">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                x: mag1.sx,
                y: mag1.sy,
                background: "linear-gradient(135deg, #6366f1, #14b8a6)",
              }}
              onMouseMove={mag1.onMove}
              onMouseLeave={mag1.onLeave}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-3 rounded-full text-sm font-semibold text-white hover:shadow-lg hover:shadow-indigo-500/30 transition-shadow duration-300"
            >
              View Resume
            </motion.a>
            <motion.a
              href="#contact"
              style={{ x: mag2.sx, y: mag2.sy }}
              onMouseMove={mag2.onMove}
              onMouseLeave={mag2.onLeave}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-3 rounded-full text-sm font-semibold border border-indigo-500/40 text-indigo-500 dark:text-indigo-400 hover:bg-indigo-500/10 backdrop-blur-sm transition-all duration-200"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Tech pills */}
          <motion.div
            variants={fadeUp(0.5)}
            className="flex flex-wrap gap-2 mt-8"
          >
            {["React", "Node.js", "Laravel", "MongoDB", "Next.js"].map(
              (tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="text-xs px-3 py-1 rounded-full bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 backdrop-blur-sm"
                >
                  {tech}
                </motion.span>
              ),
            )}
          </motion.div>
        </motion.div>

        {/* Right: Photo + Floating Code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="flex-1 flex items-center justify-center"
        >
          {/* Outer wrapper — floating code positioned relative to this */}
          <div className="relative w-64 h-64 md:w-75 md:h-75 flex items-center justify-center">
            {/* ── Floating code snippets ─────────────────── */}
            {codeSnippets.map((snippet, i) => (
              <div
                key={i}
                className={`absolute ${snippet.float} select-none pointer-events-none`}
                style={{
                  top: snippet.top,
                  left: snippet.left ?? "auto",
                  right: snippet.right ?? "auto",
                  color: snippet.color,
                  fontSize: snippet.size,
                  fontFamily: "'Fira Code', 'Courier New', monospace",
                  fontWeight: 600, // 👈 bolder text
                  whiteSpace: "nowrap",
                  textShadow: `0 0 20px ${snippet.color}44`,
                  background: `${snippet.color}18`, // 👈 was 10, now 18 — more visible bg
                  border: `1px solid ${snippet.color}50`, // 👈 was 25, now 50 — more visible border
                  borderRadius: "6px",
                  padding: "4px 10px",
                  backdropFilter: "blur(4px)",
                }}
              >
                {snippet.text}
              </div>
            ))}

            {/* ── Glow behind photo ─────────────────────── */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(20,184,166,0.08) 50%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            {/* ── Rotating dashed border ────────────────── */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                border: "1.5px dashed rgba(99,102,241,0.25)",
                borderRadius: "50%",
              }}
            />

            {/* ── Counter-rotating dashed border ────────── */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute rounded-full pointer-events-none"
              style={{
                inset: "12px",
                border: "1px dashed rgba(20,184,166,0.2)",
                borderRadius: "50%",
              }}
            />

            {/* ── Profile Photo ─────────────────────────── */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative z-10 w-48 h-48 md:w-52 md:h-52"
            >
              {/* Animated gradient border */}
              <div
                className="absolute -inset-0.5 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, #6366f1, #14b8a6, #a855f7)",
                  padding: "2.5px",
                }}
              />
              <img
                src={myPhoto}
                alt="Akshay Parekh"
                className="absolute inset-[3px] w-[calc(100%-6px)] h-[calc(100%-6px)] object-cover rounded-full z-10 border-2 border-gray-50 dark:border-[#0A0A0F]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-gray-400 dark:text-gray-600 tracking-widest uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-gradient-to-b from-indigo-500 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
