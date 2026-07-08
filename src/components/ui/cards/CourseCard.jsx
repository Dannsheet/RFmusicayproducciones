import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/helpers';

const CourseCard = forwardRef(({ 
  image, 
  title, 
  instructor, 
  duration,
  level,
  price,
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
        {image && (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
        {level && (
          <span className="absolute top-4 right-4 px-3 py-1 bg-[var(--color-accent)] text-[var(--color-text-primary)] text-[var(--font-size-xs)] font-medium rounded-[var(--radius-md)]">
            {level}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-[var(--font-size-xl)] font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
          {title}
        </h3>
        {instructor && (
          <p className="text-[var(--font-size-sm)] text-[var(--color-text-secondary)] mb-4">
            by {instructor}
          </p>
        )}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          {duration && (
            <span className="text-[var(--font-size-sm)] text-[var(--color-text-tertiary)]">
              {duration}
            </span>
          )}
          {price && (
            <span className="text-[var(--font-size-lg)] font-bold text-[var(--color-accent)]">
              {price}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
});

CourseCard.displayName = 'CourseCard';

export default CourseCard;
