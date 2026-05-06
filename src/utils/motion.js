// Fade up — used for section headings and paragraphs
export const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  },
});

// Stagger container — wraps a list of children
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

// Scale in — used for cards
export const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  },
});

// Slide in from left
export const slideInLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  },
});

// Slide in from right
export const slideInRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  },
});

// For progress bar fill animation
export const barFill = (width, delay = 0) => ({
  hidden: { width: "0%" },
  show: {
    width: `${width}%`,
    transition: { duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  },
});

// Viewport config — reuse this in every whileInView
export const viewport = { once: true, amount: 0.2 };
