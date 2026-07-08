import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';

const GlassPanel = forwardRef(({ children, className = '', blur = 'xl', ...props }, ref) => {
  const blurStyles = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
    '2xl': 'backdrop-blur-2xl',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'bg-[var(--color-bg-glass)] border border-[var(--color-border-glass)] rounded-2xl',
        blurStyles[blur],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

GlassPanel.displayName = 'GlassPanel';

export default GlassPanel;
