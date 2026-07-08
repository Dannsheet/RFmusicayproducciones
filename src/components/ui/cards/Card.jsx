import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';

const Card = forwardRef(({ children, className = '', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[var(--radius-xl)] overflow-hidden',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

const CardHeader = forwardRef(({ children, className = '', ...props }, ref) => {
  return (
    <div ref={ref} className={cn('p-6', className)} {...props}>
      {children}
    </div>
  );
});

CardHeader.displayName = 'CardHeader';

const CardBody = forwardRef(({ children, className = '', ...props }, ref) => {
  return (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props}>
      {children}
    </div>
  );
});

CardBody.displayName = 'CardBody';

const CardFooter = forwardRef(({ children, className = '', ...props }, ref) => {
  return (
    <div ref={ref} className={cn('p-6 pt-0 flex items-center', className)} {...props}>
      {children}
    </div>
  );
});

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardBody, CardFooter };
