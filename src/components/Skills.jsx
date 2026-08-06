import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import skills from "../data/skills";
import { fadeUp, staggerContainer, viewport } from "../utils/motion";

const rowLabels = {
  1: "Languages & Frontend",
  2: "Backend & Database",
  3: "Tools & Platforms",
};

const SkillCard = ({ skill }) => (
  <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3 glass rounded-xl border border-transparent hover:border-indigo-500/30 transition-all duration-300 mx-2 cursor-default group">
    <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
      {skill.icon}
    </span>
    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
      {skill.name}
    </span>
  </div>
);

// ── Drag-to-scroll + seamless CSS marquee ─────────────────
const MarqueeRow = ({ items, direction = "left", speed = 40 }) => {
  const containerRef = useRef(null);
  const setRef = useRef(null);
  const trackRef = useRef(null);

  const [setWidth, setSetWidth] = useState(0);
  const [repeatCount, setRepeatCount] = useState(2);

  const position = useRef(0); // current translateX value (always <= 0)
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartPos = useRef(0);
  const rafId = useRef(null);
  const lastTime = useRef(null);

  const dir = direction === "left" ? -1 : 1;

  // Measure one set's width, figure out how many copies fill 2x container
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current || !setRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const singleWidth = setRef.current.scrollWidth;
      if (!singleWidth) return;
      setSetWidth(singleWidth);
      const needed = Math.ceil((containerWidth * 2) / singleWidth) + 1;
      setRepeatCount(Math.max(2, needed));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [items]);

  // Main animation loop — the ONLY thing that ever moves the track
  useEffect(() => {
    if (!setWidth) return;

    const tick = (t) => {
      if (lastTime.current == null) lastTime.current = t;
      const dt = (t - lastTime.current) / 1000;
      lastTime.current = t;

      if (!isDragging.current) {
        position.current += dir * speed * dt;
      }

      // Wrap seamlessly: keep position within one setWidth span
      if (position.current <= -setWidth) position.current += setWidth;
      if (position.current > 0) position.current -= setWidth;

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${position.current}px)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId.current);
      lastTime.current = null;
    };
  }, [setWidth, speed, dir]);

  const onPointerDown = useCallback((e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartPos.current = position.current;
    trackRef.current.style.cursor = "grabbing";
    trackRef.current.setPointerCapture?.(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e) => {
    if (!isDragging.current) return;
    const delta = e.clientX - dragStartX.current;
    position.current = dragStartPos.current + delta;
  }, []);

  const endDrag = useCallback((e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (trackRef.current) {
      trackRef.current.style.cursor = "grab";
      trackRef.current.releasePointerCapture?.(e?.pointerId);
    }
    // No snapping, no reset — rAF loop just keeps incrementing
    // from position.current, exactly where the drag left it.
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full select-none"
    >
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none marquee-fade-left" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none marquee-fade-right" />

      <div
        ref={trackRef}
        className="flex items-center py-2"
        style={{
          cursor: "grab",
          willChange: "transform",
          touchAction: "pan-y",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
      >
        <div ref={setRef} className="flex items-center flex-shrink-0">
          {items.map((skill, i) => (
            <SkillCard key={`m-${skill.id}-${i}`} skill={skill} />
          ))}
        </div>

        {Array.from({ length: repeatCount - 1 }).map((_, copyIdx) => (
          <div key={copyIdx} className="flex items-center flex-shrink-0">
            {items.map((skill, i) => (
              <SkillCard key={`c${copyIdx}-${skill.id}-${i}`} skill={skill} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const row1 = skills.filter((s) => s.row === 1);
  const row2 = skills.filter((s) => s.row === 2);
  const row3 = skills.filter((s) => s.row === 3);

  return (
    <section
      id="skills"
      className="relative py-24 bg-white dark:bg-[#0D1117] dark:text-gray-200 overflow-hidden"
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

      <div className="relative z-10">
        {/* Heading */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center mb-4 px-6"
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
            A curated stack I use to build real products — from idea to
            deployment.
          </motion.p>
        </motion.div>

        {/* 3 Marquee rows — NO whileInView on rows to prevent flicker */}
        <div className="mt-12 flex flex-col gap-6">
          {/* Row 1 — scrolls left */}
          <div>
            <p className="text-center text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
              {rowLabels[1]}
            </p>
            <MarqueeRow items={row1} direction="left" speed={40} />
          </div>

          {/* Row 2 — scrolls right */}
          <div>
            <p className="text-center text-xs font-semibold text-teal-400 uppercase tracking-widest mb-3">
              {rowLabels[2]}
            </p>
            <MarqueeRow items={row2} direction="right" speed={35} />
          </div>

          {/* Row 3 — scrolls left */}
          <div>
            <p className="text-center text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">
              {rowLabels[3]}
            </p>
            <MarqueeRow items={row3} direction="left" speed={30} />
          </div>
        </div>

        {/* Bottom stats */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="flex justify-center gap-8 mt-14 px-6"
        >
          {[
            { num: "31+", label: "Technologies" },
            { num: "10+", label: "Projects Built" },
            { num: "2+", label: "Years Building" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold gradient-text">{stat.num}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
