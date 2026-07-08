import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';

const GlassCard = forwardRef(({ children, className = '', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'bg-[var(--color-bg-glass)] backdrop-blur-xl border border-[var(--color-border-glass)] rounded-[var(--radius-xl)] overflow-hidden',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

GlassCard.displayName = 'GlassCard';

export default GlassCard;
