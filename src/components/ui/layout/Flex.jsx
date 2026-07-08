import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';

const Flex = forwardRef(({ 
  children, 
  className = '', 
  direction = 'row', 
  align = 'start', 
  justify = 'start', 
  gap = 'md',
  wrap = false,
  ...props 
}, ref) => {
  const directionStyles = {
    row: 'flex-row',
    column: 'flex-col',
    'row-reverse': 'flex-row-reverse',
    'column-reverse': 'flex-column-reverse',
  };

  const alignStyles = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  };

  const justifyStyles = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
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
        wrap && 'flex-wrap',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Flex.displayName = 'Flex';

export default Flex;
