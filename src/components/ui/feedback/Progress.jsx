import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';

const Progress = forwardRef(
  (
    {
      value = 0,
      max = 100,
      size = 'md',
      variant = 'default',
      className = '',
      ...props
    },
    ref
  ) => {
    const sizeStyles = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3',
    };

    const variantStyles = {
      default: 'bg-[var(--color-accent)]',
      success: 'bg-[var(--color-success)]',
      warning: 'bg-[var(--color-warning)]',
      error: 'bg-[var(--color-error)]',
    };

    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div
        ref={ref}
        className={cn(
          'w-full bg-[var(--color-bg-tertiary)] rounded-full overflow-hidden',
          sizeStyles[size],
          className
        )}
        {...props}
      >
        <div
          className={cn(
            'h-full transition-all duration-300 ease-out rounded-full',
            variantStyles[variant]
          )}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    );
  }
);

Progress.displayName = 'Progress';

export default Progress;
