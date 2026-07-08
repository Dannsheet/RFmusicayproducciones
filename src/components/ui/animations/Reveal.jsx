import { motion } from 'framer-motion';

const Reveal = ({ children, delay = 0, duration = 0.6, direction = 'up', className = '' }) => {
  const variants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: -50, opacity: 0 },
    right: { x: 50, opacity: 0 },
  };

  return (
    <motion.div
      initial={variants[direction]}
      animate={{ y: 0, x: 0, opacity: 1 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
