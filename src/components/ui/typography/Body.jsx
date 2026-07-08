import { cn } from '../../../utils/helpers';

const Body = ({ children, className = '', as = 'p', size = 'base', ...props }) => {
  const Tag = as;
  const sizeClasses = {
    large: 'text-[var(--font-size-lg)] leading-[var(--line-height-relaxed)]',
    base: 'text-[var(--font-size-base)] leading-[var(--line-height-normal)]',
    small: 'text-[var(--font-size-sm)] leading-[var(--line-height-normal)]',
  };

  return (
    <Tag
      className={cn(
        sizeClasses[size] || sizeClasses.base,
        'font-[var(--font-weight-normal)] tracking-[var(--letter-spacing-normal)] text-[var(--color-text-secondary)]',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Body;
