import { motion } from 'framer-motion';

const SlideIn = ({ 
  children, 
  direction = 'left', 
  delay = 0, 
  duration = 0.6, 
  className = '' 
}) => {
  const variants = {
    left: { x: -50 },
    right: { x: 50 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...variants[direction] }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, ...variants[direction] }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
