import { motion } from 'framer-motion';

const VUMeter = ({ size = 'md', className = '' }) => {
  const sizeStyles = {
    sm: { width: 'w-24', height: 'h-2', bar: 'h-2' },
    md: { width: 'w-32', height: 'h-3', bar: 'h-3' },
    lg: { width: 'w-48', height: 'h-4', bar: 'h-4' },
  };

  const currentSize = sizeStyles[size];

  return (
    <div className={`flex items-center ${currentSize.width} ${className}`}>
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className={`${currentSize.bar} bg-[var(--color-accent)] rounded-sm flex-1 mx-px`}
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: i * 0.05,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default VUMeter;
