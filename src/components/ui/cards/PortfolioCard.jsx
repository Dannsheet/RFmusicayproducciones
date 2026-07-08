import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/helpers';

const PortfolioCard = forwardRef(({ 
  image, 
  title, 
  category, 
  description,
  className = '',
  ...props 
}, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(
        'bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-xl)] overflow-hidden group cursor-pointer',
        className
      )}
      whileHover={{ y: -4 }}
      {...props}
    >
      <div className="relative overflow-hidden aspect-video">
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-secondary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        {image && (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
      </div>
      <div className="p-6">
        {category && (
          <span className="text-[var(--font-size-xs)] font-medium text-[var(--color-accent)] uppercase tracking-wider mb-2 block">
            {category}
          </span>
        )}
        <h3 className="text-[var(--font-size-xl)] font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-[var(--font-size-sm)] text-[var(--color-text-secondary)] line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
});

PortfolioCard.displayName = 'PortfolioCard';

export default PortfolioCard;
