import { motion } from 'framer-motion';

const Waveform = ({ bars = 8, size = 'md', className = '' }) => {
  const sizeStyles = {
    sm: { bar: 'w-1', height: 'h-8' },
    md: { bar: 'w-2', height: 'h-12' },
    lg: { bar: 'w-3', height: 'h-16' },
  };

  const currentSize = sizeStyles[size];

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className={`${currentSize.bar} ${currentSize.height} bg-[var(--color-accent)] rounded-full`}
          animate={{
            scaleY: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.08,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default Waveform;
