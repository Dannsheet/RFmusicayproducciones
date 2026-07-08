import { cn } from '../../../utils/helpers';

const DisplayXL = ({ children, className = '', as = 'h1', ...props }) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        'text-[var(--font-size-9xl)] font-[var(--font-weight-bold)] leading-[var(--line-height-tight)] tracking-[var(--letter-spacing-tighter)] text-[var(--color-text-primary)]',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default DisplayXL;
