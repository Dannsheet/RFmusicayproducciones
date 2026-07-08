import { cn } from '../../../utils/helpers';

const Label = ({ children, className = '', as = 'label', required = false, ...props }) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        'text-[var(--font-size-sm)] font-[var(--font-weight-medium)] leading-[var(--line-height-normal)] tracking-[var(--letter-spacing-normal)] text-[var(--color-text-primary)]',
        className
      )}
      {...props}
    >
      {children}
      {required && <span className="text-[var(--color-error)] ml-1">*</span>}
    </Tag>
  );
};

export default Label;
