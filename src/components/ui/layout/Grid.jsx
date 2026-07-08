import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';

const Grid = forwardRef(({ children, className = '', cols = 1, gap = 'md', ...props }, ref) => {
  const colsStyles = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
    12: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6',
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
      className={cn('grid', colsStyles[cols], gapStyles[gap], className)}
      {...props}
    >
      {children}
    </div>
  );
});

Grid.displayName = 'Grid';

export default Grid;
