import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';

const Spacer = forwardRef(({ className = '', size = 'md', ...props }, ref) => {
  const sizeStyles = {
    xs: 'h-2',
    sm: 'h-3',
    md: 'h-4',
    lg: 'h-6',
    xl: 'h-8',
    '2xl': 'h-12',
    '3xl': 'h-16',
  };

  return (
    <div
      ref={ref}
      className={cn(sizeStyles[size], className)}
      {...props}
    />
  );
});

Spacer.displayName = 'Spacer';

export default Spacer;
