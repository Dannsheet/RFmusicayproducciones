import { motion } from 'framer-motion';

const Equalizer = ({ bars = 5, size = 'md', className = '' }) => {
  const sizeStyles = {
    sm: { bar: 'w-1', gap: 'gap-1' },
    md: { bar: 'w-2', gap: 'gap-2' },
    lg: { bar: 'w-3', gap: 'gap-3' },
  };

  const currentSize = sizeStyles[size];

  return (
    <div className={`flex items-center ${currentSize.gap} ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className={`${currentSize.bar} bg-[var(--color-accent)] rounded-full`}
          animate={{
            height: ['20%', '100%', '20%'],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.1,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default Equalizer;
