import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';
import { FiX } from 'react-icons/fi';

const Chip = forwardRef(
  (
    {
      children,
      onClose,
      selected = false,
      size = 'md',
      className = '',
      ...props
    },
    ref
  ) => {
    const sizeStyles = {
      sm: 'px-2.5 py-1 text-xs',
      md: 'px-3 py-1.5 text-sm',
      lg: 'px-4 py-2 text-base',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full font-medium transition-all duration-200',
          selected
            ? 'bg-[var(--color-accent)] text-[var(--color-text-primary)]'
            : 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)]',
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

Chip.displayName = 'Chip';

export default Chip;
