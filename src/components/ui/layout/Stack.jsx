import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';

const Stack = forwardRef(({ 
  children, 
  className = '', 
  direction = 'column', 
  align = 'start', 
  justify = 'start', 
  gap = 'md',
  ...props 
}, ref) => {
  const directionStyles = {
    row: 'flex-row',
    column: 'flex-col',
  };

  const alignStyles = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };

  const justifyStyles = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
  };

  const gapStyles = {
    xs: 'gap-2',
    sm: 'gap-3',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
    '2xl': 'gap-12',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'flex',
        directionStyles[direction],
        alignStyles[align],
        justifyStyles[justify],
        gapStyles[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Stack.displayName = 'Stack';

export default Stack;
