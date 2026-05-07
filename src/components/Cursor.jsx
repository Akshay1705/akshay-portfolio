import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Raw mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Dot follows instantly
  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 50 });

  // Ring follows with lag — gives the trailing effect
  const ringX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onEnter = () => setIsVisible(true);
    const onLeave = () => setIsVisible(false);

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    // Detect hovering over interactive elements
    const onHoverStart = (e) => {
      const tag = e.target.tagName.toLowerCase();
      const isInteractive =
        tag === "a" ||
        tag === "button" ||
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.getAttribute("role") === "button" ||
        e.target.classList.contains("cursor-pointer");
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousemove", onHoverStart);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", onHoverStart);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isVisible, mouseX, mouseY]);

  // Don't render on touch devices at all
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none)").matches
  )
    return null;

  return (
    <>
      {/* ── Outer Ring ─────────────────────────────────── */}
      <motion.div
        className="cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.7 : isHovering ? 1.8 : 1,
          borderColor: isHovering
            ? "rgba(20,184,166,0.7)" // teal on hover
            : "rgba(99,102,241,0.6)", // indigo default
          backgroundColor: isHovering ? "rgba(20,184,166,0.06)" : "transparent",
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { type: "spring", stiffness: 200, damping: 20 },
          borderColor: { duration: 0.3 },
          backgroundColor: { duration: 0.3 },
        }}
      />

      {/* ── Inner Dot ──────────────────────────────────── */}
      <motion.div
        className="cursor-dot"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.5 : isHovering ? 0 : 1,
          background: isHovering ? "#14b8a6" : "#6366f1",
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { type: "spring", stiffness: 300, damping: 20 },
          background: { duration: 0.3 },
        }}
      />

      {/* ── Click ripple ───────────────────────────────── */}
      {isClicking && (
        <motion.div
          className="cursor-ring"
          style={{
            x: dotX,
            y: dotY,
            translateX: "-50%",
            translateY: "-50%",
            position: "fixed",
            pointerEvents: "none",
            zIndex: 9998,
          }}
          initial={{ scale: 0.5, opacity: 0.6 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      )}
    </>
  );
};

export default Cursor;
