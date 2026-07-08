import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';

const GlassButton = forwardRef(({ children, className = '', blur = 'md', ...props }, ref) => {
  const blurStyles = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  return (
    <button
      ref={ref}
      className={cn(
        'bg-[var(--color-bg-glass)] border border-[var(--color-border-glass)] rounded-lg',
        'text-[var(--color-text-primary)] font-medium px-4 py-2',
        'hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)]',
        'transition-all duration-200',
        blurStyles[blur],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

GlassButton.displayName = 'GlassButton';

export default GlassButton;
