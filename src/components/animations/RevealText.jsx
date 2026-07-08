import { motion } from 'framer-motion';

const RevealText = ({ children, delay = 0, duration = 0.8, className = '' }) => {
  const words = typeof children === 'string' ? children.split(' ') : [children];

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration,
            delay: delay + index * 0.05,
            ease: 'easeOut',
          }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default RevealText;
