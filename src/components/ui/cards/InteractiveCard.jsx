import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/helpers';

const InteractiveCard = forwardRef(({ children, className = '', ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(
        'bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-xl)] overflow-hidden cursor-pointer group',
        className
      )}
      whileHover={{ 
        y: -4, 
        borderColor: 'var(--color-accent)',
        boxShadow: 'var(--shadow-glow)'
      }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
});

InteractiveCard.displayName = 'InteractiveCard';

export default InteractiveCard;
