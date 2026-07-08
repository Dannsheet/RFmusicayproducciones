import { cn } from '../../../utils/helpers';

const Display = ({ children, className = '', as = 'h1', ...props }) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        'text-[var(--font-size-7xl)] font-[var(--font-weight-bold)] leading-[var(--line-height-tight)] tracking-[var(--letter-spacing-tight)] text-[var(--color-text-primary)]',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Display;
