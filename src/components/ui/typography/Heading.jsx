import { cn } from '../../../utils/helpers';

const Heading = ({ children, className = '', as = 'h2', level = 2, ...props }) => {
  const Tag = as;
  const sizeClasses = {
    1: 'text-[var(--font-size-6xl)]',
    2: 'text-[var(--font-size-5xl)]',
    3: 'text-[var(--font-size-4xl)]',
    4: 'text-[var(--font-size-3xl)]',
    5: 'text-[var(--font-size-2xl)]',
    6: 'text-[var(--font-size-xl)]',
  };

  return (
    <Tag
      className={cn(
        sizeClasses[level] || sizeClasses[2],
        'font-[var(--font-weight-semibold)] leading-[var(--line-height-tight)] tracking-[var(--letter-spacing-tight)] text-[var(--color-text-primary)]',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Heading;
