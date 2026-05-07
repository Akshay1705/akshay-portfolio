import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import skills from "../data/skills";
import { fadeUp, staggerContainer, viewport } from "../utils/motion";

const categories = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "Database",
  "API",
  "Tools",
  "Platforms",
];

const INITIAL_SHOW = 10; // 2 rows of 5

const SkillCard = ({ skill, index }) => (
  <motion.div
    variants={fadeUp(index * 0.04)}
    whileHover={{ scale: 1.06, y: -4 }}
    className="flex flex-col items-center justify-center gap-2 p-4 glass rounded-xl border border-transparent hover:border-indigo-500/30 transition-all duration-300 cursor-default"
  >
    <span className="text-3xl">{skill.icon}</span>
    <p className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center leading-tight">
      {skill.name}
    </p>
  </motion.div>
);

const Skills = () => {
  const [selected, setSelected] = useState("All");
  const [expanded, setExpanded] = useState(false);

  const filtered =
    selected === "All" ? skills : skills.filter((s) => s.category === selected);

  const visible = expanded ? filtered : filtered.slice(0, INITIAL_SHOW);
  const hasMore = filtered.length > INITIAL_SHOW;

  const handleFilter = (cat) => {
    setSelected(cat);
    setExpanded(false); // reset on filter change
  };

  return (
    <section
      id="skills"
      className="relative py-24 bg-white dark:bg-[#0D1117] dark:text-gray-200 overflow-hidden noise-overlay"
    >
      {/* BG layers */}
      <div className="absolute inset-0 z-0 indigo-grid pointer-events-none" />
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="orb orb-indigo blob-3"
          style={{ width: 350, height: 350, bottom: "-80px", left: "-60px" }}
        />
        <div
          className="orb orb-purple blob-1"
          style={{ width: 280, height: 280, top: "-60px", right: "10%" }}
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeUp(0)}
            className="text-3xl md:text-4xl font-bold section-heading-center"
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            variants={fadeUp(0.1)}
            className="text-gray-500 dark:text-gray-400 mt-4 text-sm max-w-lg mx-auto"
          >
            Technologies and tools I work with — from languages to deployment
            platforms.
          </motion.p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          variants={fadeUp(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                selected === cat
                  ? "bg-indigo-500 border-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                  : "border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-indigo-500/50 hover:text-indigo-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid — 5 per row */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            variants={staggerContainer(0.05)}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {visible.map((skill, i) => (
              <SkillCard key={skill.id} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More / View Less button */}
        {hasMore && (
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex justify-center mt-8"
          >
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="group flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold border border-indigo-500/40 text-indigo-500 hover:bg-indigo-500 hover:text-white transition-all duration-300"
            >
              {expanded
                ? "View Less"
                : `View More (${filtered.length - INITIAL_SHOW} more)`}
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                ↓
              </motion.span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;
