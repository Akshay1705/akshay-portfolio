import { motion, useMotionValue, useSpring } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import myPhoto from "../assets/profile photo.png";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewport,
} from "../utils/motion";

const stats = [
  { value: 10, suffix: "+", label: "Projects Built" },
  { value: 2, suffix: "+", label: "Years Coding" },
  { value: 5, suffix: "+", label: "Tech Stacks" },
];

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 15 });
  const sry = useSpring(ry, { stiffness: 120, damping: 15 });

  const onPhotoMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rx.set(py * -15);
    ry.set(px * 15);
  };
  const onPhotoLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-[#0D1117] text-gray-800 dark:text-gray-200"
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex flex-col md:flex-row items-center gap-16"
        >
          {/* Left: Photo */}
          <motion.div
            variants={slideInLeft(0)}
            className="flex-1 flex justify-center"
            style={{ perspective: 800 }}
          >
            <motion.div
              style={{ rotateX: srx, rotateY: sry }}
              onMouseMove={onPhotoMove}
              onMouseLeave={onPhotoLeave}
              className="relative cursor-pointer"
            >
              <div className="absolute -inset-3 rounded-2xl glow-indigo opacity-60" />
              <img
                src={myPhoto}
                alt="Akshay Parekh"
                className="relative z-10 w-72 h-auto rounded-2xl border border-indigo-500/20 shadow-2xl"
              />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-teal-400/40 rounded-br-2xl" />
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-indigo-500/40 rounded-tl-2xl" />
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <motion.div variants={slideInRight(0)} className="flex-1">
            <motion.h2
              variants={fadeUp(0)}
              className="text-3xl md:text-4xl font-bold mb-6 section-heading"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>

            <motion.div
              variants={fadeUp(0.1)}
              className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              <p>
                I'm{" "}
                <span className="text-indigo-500 font-medium">
                  Akshay Parekh
                </span>
                , a curious builder and problem-solver from Gujarat, India.
                Currently pursuing my B.Tech in Computer Science at Parul
                University, I thrive on turning ideas into impactful digital
                products.
              </p>
              <p>
                I believe in{" "}
                <span className="font-medium text-indigo-500">
                  finishing what I start
                </span>
                , in learning by building, and in constantly pushing myself to
                grow. My projects aren't just code — they're experiments,
                challenges, and steps toward becoming an engineer who builds
                tools that matter.
              </p>
              <p>
                Outside of coding, I'm driven by the vision of shaping myself
                into a professional who's always{" "}
                <span className="font-medium text-teal-500">
                  curious, disciplined, and resilient
                </span>
                .
              </p>
            </motion.div>

            {/* Stats — fixed light mode bg */}
            <div ref={ref} className="grid grid-cols-3 gap-6 mt-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp(i * 0.1)}
                  className="rounded-xl p-4 text-center border border-indigo-100 dark:border-indigo-500/10 bg-indigo-50/80 dark:bg-white/5 shadow-sm"
                >
                  <div className="text-3xl font-bold gradient-text">
                    {inView ? (
                      <CountUp
                        end={stat.value}
                        duration={2}
                        suffix={stat.suffix}
                      />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
