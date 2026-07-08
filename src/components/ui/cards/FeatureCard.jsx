import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/helpers';

const FeatureCard = forwardRef(({ icon: Icon, title, description, className = '', ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(
        'bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-xl)] p-6 group hover:border-[var(--color-accent)] transition-all duration-300',
        className
      )}
      whileHover={{ scale: 1.02 }}
      {...props}
    >
      {Icon && (
        <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-[var(--color-accent-muted)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent)] transition-colors duration-300">
          <Icon className="text-[var(--color-accent)] group-hover:text-[var(--color-text-primary)] transition-colors duration-300" size={24} />
        </div>
      )}
      <h3 className="text-[var(--font-size-xl)] font-semibold text-[var(--color-text-primary)] mb-2">{title}</h3>
      <p className="text-[var(--font-size-base)] text-[var(--color-text-secondary)]">{description}</p>
    </motion.div>
  );
});

FeatureCard.displayName = 'FeatureCard';

export default FeatureCard;
