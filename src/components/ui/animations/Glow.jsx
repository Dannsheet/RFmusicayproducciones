import { motion } from 'framer-motion';

const Glow = ({ children, color = 'var(--color-accent)', intensity = 0.5, className = '', ...props }) => {
  return (
    <motion.div
      className={className}
      whileHover={{
        boxShadow: `0 0 30px ${color} ${intensity}`,
      }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Glow;
