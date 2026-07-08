import { cn } from '../../../utils/helpers';

const Caption = ({ children, className = '', as = 'span', size = 'base', ...props }) => {
  const Tag = as;
  const sizeClasses = {
    large: 'text-[var(--font-size-sm)] font-[var(--font-weight-medium)]',
    base: 'text-[var(--font-size-xs)] font-[var(--font-weight-normal)]',
    small: 'text-[0.625rem] font-[var(--font-weight-normal)]',
  };

  return (
    <Tag
      className={cn(
        sizeClasses[size] || sizeClasses.base,
        'leading-[var(--line-height-normal)] tracking-[var(--letter-spacing-normal)] text-[var(--color-text-tertiary)]',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Caption;
