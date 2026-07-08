import { motion } from 'framer-motion';

const CircularLoader = ({ size = 'md', className = '' }) => {
  const sizeStyles = {
    sm: 'w-8 h-8 border-2',
    md: 'w-12 h-12 border-3',
    lg: 'w-16 h-16 border-4',
  };

  return (
    <motion.div
      className={`rounded-full border-[var(--color-border)] border-t-[var(--color-accent)] ${sizeStyles[size]} ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
};

export default CircularLoader;
