import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';

const Container = forwardRef(({ children, className = '', size = 'xl', ...props }, ref) => {
  const sizeStyles = {
    sm: 'max-w-[var(--container-sm)]',
    md: 'max-w-[var(--container-md)]',
    lg: 'max-w-[var(--container-lg)]',
    xl: 'max-w-[var(--container-xl)]',
    '2xl': 'max-w-[var(--container-2xl)]',
    full: 'max-w-full',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'w-full mx-auto px-4 sm:px-6 lg:px-8',
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Container.displayName = 'Container';

export default Container;
