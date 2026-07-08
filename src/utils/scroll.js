import Lenis from 'lenis';

let lenisInstance = null;

/**
 * Initialize Lenis smooth scroll
 */
export const initLenis = () => {
  if (typeof window === 'undefined') return;

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
    smoothTouch: false,
    touchMultiplier: 2,
  });

  function raf(time) {
    lenisInstance.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenisInstance;
};

/**
 * Get Lenis instance
 */
export const getLenis = () => {
  return lenisInstance;
};

/**
 * Stop Lenis scroll
 */
export const stopLenis = () => {
  if (lenisInstance) {
    lenisInstance.stop();
  }
};

/**
 * Start Lenis scroll
 */
export const startLenis = () => {
  if (lenisInstance) {
    lenisInstance.start();
  }
};

/**
 * Scroll to specific position
 */
export const lenisScrollTo = (target, options = {}) => {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, options);
  }
};

/**
 * Destroy Lenis instance
 */
export const destroyLenis = () => {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
};
