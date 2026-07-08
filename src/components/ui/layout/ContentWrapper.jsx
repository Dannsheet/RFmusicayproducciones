import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';

const ContentWrapper = forwardRef(({ children, className = '', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'max-w-3xl mx-auto px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

ContentWrapper.displayName = 'ContentWrapper';

export default ContentWrapper;
