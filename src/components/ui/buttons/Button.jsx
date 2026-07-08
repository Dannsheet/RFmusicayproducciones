import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';
import { FiLoader } from 'react-icons/fi';

const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      icon: Icon,
      iconPosition = 'left',
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';

    const variantStyles = {
      primary: 'bg-[var(--color-accent)] text-[var(--color-text-primary)] hover:bg-[var(--color-accent-hover)] hover:shadow-lg hover:shadow-[var(--color-accent-glow)] active:scale-[0.98]',
      secondary: 'bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] border border-[var(--color-border-subtle)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-md active:scale-[0.98]',
      outline: 'bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border-subtle)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-sm active:scale-[0.98]',
      ghost: 'bg-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text-primary)] active:scale-[0.98]',
      glass: 'bg-[var(--color-bg-glass)] text-[var(--color-text-primary)] border border-[var(--color-border-subtle)] backdrop-blur-md hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-md active:scale-[0.98]',
      gradient: 'bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-hover)] text-[var(--color-text-primary)] hover:opacity-95 shadow-lg hover:shadow-xl hover:shadow-[var(--color-accent-glow)] active:scale-[0.98]',
      danger: 'bg-[var(--color-error)] text-[var(--color-text-primary)] hover:bg-[var(--color-error)] hover:opacity-90 shadow-md hover:shadow-lg active:scale-[0.98]',
      success: 'bg-[var(--color-success)] text-[var(--color-text-primary)] hover:bg-[var(--color-success)] hover:opacity-90 shadow-md hover:shadow-lg active:scale-[0.98]',
    };

    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm rounded-[var(--radius-md)]',
      md: 'px-4 py-2 text-base rounded-[var(--radius-lg)]',
      lg: 'px-6 py-3 text-lg rounded-[var(--radius-xl)]',
      xl: 'px-8 py-4 text-xl rounded-[var(--radius-2xl)]',
    };

    const iconSizes = {
      sm: 16,
      md: 18,
      lg: 20,
      xl: 22,
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {loading && <FiLoader className={cn('animate-spin', iconPosition === 'left' ? 'mr-2' : 'ml-2')} size={iconSizes[size]} />}
        {!loading && Icon && iconPosition === 'left' && <Icon className="mr-2" size={iconSizes[size]} />}
        {children}
        {!loading && Icon && iconPosition === 'right' && <Icon className="ml-2" size={iconSizes[size]} />}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
