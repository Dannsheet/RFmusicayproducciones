import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';

const Badge = forwardRef(
  (
    {
      variant = 'default',
      size = 'md',
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default: 'bg-[var(--color-accent)] text-[var(--color-text-primary)]',
      secondary: 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]',
      success: 'bg-[var(--color-success)] text-[var(--color-text-primary)]',
      warning: 'bg-[var(--color-warning)] text-[var(--color-text-primary)]',
      error: 'bg-[var(--color-error)] text-[var(--color-text-primary)]',
      outline: 'bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border)]',
    };

    const sizeStyles = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
      lg: 'px-3 py-1.5 text-base',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full font-medium',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
