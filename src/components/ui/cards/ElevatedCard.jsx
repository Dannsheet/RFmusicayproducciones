import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';

const ElevatedCard = forwardRef(({ children, className = '', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-xl)] overflow-hidden shadow-xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

ElevatedCard.displayName = 'ElevatedCard';

export default ElevatedCard;
