import { cn } from '../../../utils/helpers';

const DisplayLarge = ({ children, className = '', as = 'h1', ...props }) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        'text-[var(--font-size-8xl)] font-[var(--font-weight-bold)] leading-[var(--line-height-tight)] tracking-[var(--letter-spacing-tighter)] text-[var(--color-text-primary)]',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default DisplayLarge;
