import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';

const Section = forwardRef(({ children, className = '', py = 'xl', ...props }, ref) => {
  const pyStyles = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20',
    '2xl': 'py-28',
    '3xl': 'py-36',
  };

  return (
    <section
      ref={ref}
      className={cn(pyStyles[py], className)}
      {...props}
    >
      {children}
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
