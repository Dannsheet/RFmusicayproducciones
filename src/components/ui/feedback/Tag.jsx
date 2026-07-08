import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';
import { FiX } from 'react-icons/fi';

const Tag = forwardRef(
  (
    {
      children,
      onClose,
      variant = 'default',
      size = 'md',
      className = '',
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default: 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]',
      accent: 'bg-[var(--color-accent-muted)] text-[var(--color-accent)] border border-[var(--color-accent)]',
      success: 'bg-[var(--color-success-muted)] text-[var(--color-success)] border border-[var(--color-success)]',
    };

    const sizeStyles = {
      sm: 'px-2 py-1 text-xs',
      md: 'px-3 py-1.5 text-sm',
      lg: 'px-4 py-2 text-base',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-md font-medium transition-colors',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
        {onClose && (
          <button
            onClick={onClose}
            className="ml-2 hover:opacity-70 transition-opacity"
          >
            <FiX size={14} />
          </button>
        )}
      </span>
    );
  }
);

Tag.displayName = 'Tag';

export default Tag;
