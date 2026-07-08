import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';

const GlassNavigation = forwardRef(({ children, className = '', blur = 'xl', ...props }, ref) => {
  const blurStyles = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  return (
    <nav
      ref={ref}
      className={cn(
        'bg-[var(--color-bg-glass)] border-b border-[var(--color-border-glass)]',
        blurStyles[blur],
        className
      )}
      {...props}
    >
      {children}
    </nav>
  );
});

GlassNavigation.displayName = 'GlassNavigation';

export default GlassNavigation;
