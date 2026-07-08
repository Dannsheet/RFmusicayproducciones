import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';

const Divider = forwardRef(({ className = '', orientation = 'horizontal', ...props }, ref) => {
  const orientationStyles = {
    horizontal: 'w-full h-px',
    vertical: 'h-full w-px',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'bg-[var(--color-border)]',
        orientationStyles[orientation],
        className
      )}
      {...props}
    />
  );
});

Divider.displayName = 'Divider';

export default Divider;
