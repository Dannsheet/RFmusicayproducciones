import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';

const IconButton = forwardRef(
  (
    {
      icon: Icon,
      variant = 'ghost',
      size = 'md',
      disabled = false,
      loading = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';

    const variantStyles = {
      primary: 'bg-[var(--color-accent)] text-[var(--color-text-primary)] hover:bg-[var(--color-accent-hover)] shadow-md',
      secondary: 'bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-accent)]',
      outline: 'bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-accent)]',
      ghost: 'bg-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)]',
      glass: 'bg-[var(--color-bg-glass)] text-[var(--color-text-primary)] border border-[var(--color-border-glass)] backdrop-blur-md',
    };

    const sizeStyles = {
      sm: 'p-2 rounded-[var(--radius-md)]',
      md: 'p-2.5 rounded-[var(--radius-lg)]',
      lg: 'p-3 rounded-[var(--radius-xl)]',
      xl: 'p-4 rounded-[var(--radius-2xl)]',
    };

    const iconSizes = {
      sm: 16,
      md: 20,
      lg: 24,
      xl: 28,
    };

    if (loading) {
      return (
        <button
          ref={ref}
          disabled
          className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
          {...props}
        >
          <div className="animate-spin rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-accent)]" style={{ width: iconSizes[size], height: iconSizes[size] }} />
        </button>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        <Icon size={iconSizes[size]} />
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
