import { motion } from 'framer-motion';

const LinearLoader = ({ width = 'w-full', height = 'h-1', className = '' }) => {
  return (
    <div className={`overflow-hidden ${width} ${height} bg-[var(--color-bg-tertiary)] rounded-full ${className}`}>
      <motion.div
        className="h-full bg-[var(--color-accent)]"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default LinearLoader;
