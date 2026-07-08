import { motion } from 'framer-motion';

const ScaleIn = ({ children, delay = 0, duration = 0.4, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.175, 0.885, 0.32, 1.275] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScaleIn;
