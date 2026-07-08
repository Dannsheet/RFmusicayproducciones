import { gsap } from 'gsap';

/**
 * Fade in animation using GSAP
 */
export const fadeIn = (element, options = {}) => {
  const defaults = {
    duration: 0.5,
    opacity: 1,
    ease: 'power2.out',
  };
  return gsap.to(element, { ...defaults, ...options });
};

/**
 * Fade out animation using GSAP
 */
export const fadeOut = (element, options = {}) => {
  const defaults = {
    duration: 0.5,
    opacity: 0,
    ease: 'power2.in',
  };
  return gsap.to(element, { ...defaults, ...options });
};

/**
 * Slide up animation using GSAP
 */
export const slideUp = (element, options = {}) => {
  const defaults = {
    duration: 0.6,
    y: 0,
    opacity: 1,
    ease: 'power3.out',
    startAt: { y: 50, opacity: 0 },
  };
  return gsap.fromTo(element, defaults.startAt, { ...defaults, ...options, startAt: undefined });
};

/**
 * Slide down animation using GSAP
 */
export const slideDown = (element, options = {}) => {
  const defaults = {
    duration: 0.6,
    y: 0,
    opacity: 1,
    ease: 'power3.out',
    startAt: { y: -50, opacity: 0 },
  };
  return gsap.fromTo(element, defaults.startAt, { ...defaults, ...options, startAt: undefined });
};

/**
 * Scale animation using GSAP
 */
export const scaleIn = (element, options = {}) => {
  const defaults = {
    duration: 0.4,
    scale: 1,
    opacity: 1,
    ease: 'back.out(1.7)',
    startAt: { scale: 0.8, opacity: 0 },
  };
  return gsap.fromTo(element, defaults.startAt, { ...defaults, ...options, startAt: undefined });
};

/**
 * Stagger animation for multiple elements
 */
export const staggerIn = (elements, options = {}) => {
  const defaults = {
    duration: 0.5,
    y: 0,
    opacity: 1,
    stagger: 0.1,
    ease: 'power2.out',
    startAt: { y: 30, opacity: 0 },
  };
  return gsap.fromTo(elements, defaults.startAt, { ...defaults, ...options, startAt: undefined });
};

/**
 * Kill all GSAP animations on element
 */
export const killAnimations = (element) => {
  gsap.killTweensOf(element);
};

/**
 * Create a timeline for sequential animations
 */
export const createTimeline = (options = {}) => {
  return gsap.timeline(options);
};
