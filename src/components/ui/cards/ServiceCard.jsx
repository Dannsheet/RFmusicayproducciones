import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/helpers';

const ServiceCard = forwardRef(({ 
  icon: Icon, 
  title, 
  description, 
  price,
  features = [],
  className = '',
  ...props 
}, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(
        'bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-2xl)] p-8 group hover:border-[var(--color-accent)] transition-all duration-300',
        className
      )}
      whileHover={{ y: -8 }}
      {...props}
    >
      {Icon && (
        <div className="w-16 h-16 rounded-[var(--radius-xl)] bg-[var(--color-accent-muted)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent)] transition-colors duration-300">
          <Icon className="text-[var(--color-accent)] group-hover:text-[var(--color-text-primary)] transition-colors duration-300" size={32} />
        </div>
      )}
      <h3 className="text-[var(--font-size-2xl)] font-semibold text-[var(--color-text-primary)] mb-3">{title}</h3>
      {price && (
        <p className="text-[var(--font-size-3xl)] font-bold text-[var(--color-accent)] mb-4">{price}</p>
      )}
      <p className="text-[var(--font-size-base)] text-[var(--color-text-secondary)] mb-6">{description}</p>
      {features.length > 0 && (
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-[var(--font-size-sm)] text-[var(--color-text-secondary)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mr-3" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;
