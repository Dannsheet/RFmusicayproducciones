import { motion } from 'framer-motion';

const SoundPulse = ({ size = 'md', className = '' }) => {
  const sizeStyles = {
    sm: { outer: 'w-12 h-12', inner: 'w-6 h-6' },
    md: { outer: 'w-16 h-16', inner: 'w-8 h-8' },
    lg: { outer: 'w-24 h-24', inner: 'w-12 h-12' },
  };

  const currentSize = sizeStyles[size];

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.div
        className={`absolute rounded-full border-2 border-[var(--color-accent)] ${currentSize.outer}`}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className={`absolute rounded-full border-2 border-[var(--color-accent)] ${currentSize.outer}`}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.5,
          ease: 'easeInOut',
        }}
      />
      <div className={`rounded-full bg-[var(--color-accent)] ${currentSize.inner}`} />
    </div>
  );
};

export default SoundPulse;
