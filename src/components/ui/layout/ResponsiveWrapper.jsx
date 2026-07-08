import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';

const ResponsiveWrapper = forwardRef(({ children, className = '', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'w-full px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

ResponsiveWrapper.displayName = 'ResponsiveWrapper';

export default ResponsiveWrapper;
