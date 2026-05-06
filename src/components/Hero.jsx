import { motion, useMotionValue, useSpring } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Typewriter } from "react-simple-typewriter";
import myPhoto from "../assets/myPhoto.png";
import { fadeUp, staggerContainer } from "../utils/motion";

// Magnetic button hook
const useMagnetic = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15 });
  const sy = useSpring(y, { stiffness: 150, damping: 15 });

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.3);
    y.set((e.clientY - cy) * 0.3);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { sx, sy, onMove, onLeave };
};

const Hero = () => {
  const mag1 = useMagnetic();
  const mag2 = useMagnetic();

  return (
    <section
      id="hero"
      className="min-h-screen bg-gray-50 dark:bg-[#0A0A0F] flex items-center pt-20"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text */}
        <motion.div
          variants={staggerContainer(0.12, 0.3)}
          initial="hidden"
          animate="show"
          className="flex-1"
        >
          {/* Badge */}
          <motion.div variants={fadeUp(0)} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp(0.1)}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-2"
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
              style={{ x: mag1.sx, y: mag1.sy }}
              onMouseMove={mag1.onMove}
              onMouseLeave={mag1.onLeave}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
              style={{
                background: "linear-gradient(135deg, #6366f1, #14b8a6)",
                x: mag1.sx,
                y: mag1.sy,
              }}
            >
              View Resume
            </motion.a>
            <motion.a
              href="#contact"
              style={{ x: mag2.sx, y: mag2.sy }}
              onMouseMove={mag2.onMove}
              onMouseLeave={mag2.onLeave}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-3 rounded-full text-sm font-semibold border border-indigo-500/50 text-indigo-500 dark:text-indigo-400 hover:bg-indigo-500/10 transition-all duration-200"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right: 3D Sphere + Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="flex-1 relative w-full h-80 md:h-[480px]"
        >
          {/* 3D Sphere */}
          <div className="absolute inset-0 z-0">
            <Canvas>
              <ambientLight intensity={1} />
              <directionalLight position={[2, 1, 1]} />
              <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={1.5}
              />
              <Sphere args={[1, 100, 200]} scale={2.5}>
                <MeshDistortMaterial
                  color="#6366f1"
                  distort={0.45}
                  speed={2}
                  roughness={0}
                  metalness={0.1}
                />
              </Sphere>
            </Canvas>
          </div>

          {/* Profile Photo */}
          <div className="relative w-full h-full flex items-center justify-center z-10">
            <motion.div
              whileHover={{ scale: 1.04, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-full glow-indigo" />
              <img
                src={myPhoto}
                alt="Akshay Parekh"
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-2 border-indigo-500/30 shadow-2xl relative z-10"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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
