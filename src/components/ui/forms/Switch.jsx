import { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/helpers';

const Switch = forwardRef(
  (
    {
      label,
      checked: controlledChecked,
      defaultChecked = false,
      onChange,
      disabled = false,
      size = 'md',
      className = '',
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isControlled = controlledChecked !== undefined;
    const checked = isControlled ? controlledChecked : internalChecked;

    const sizeStyles = {
      sm: { width: 'w-9', height: 'h-5', thumb: 'w-3 h-3', translateX: checked ? 16 : 4 },
      md: { width: 'w-11', height: 'h-6', thumb: 'w-4 h-4', translateX: checked ? 20 : 4 },
      lg: { width: 'w-14', height: 'h-8', thumb: 'w-5 h-5', translateX: checked ? 28 : 4 },
    };

    const currentSize = sizeStyles[size];

    const handleChange = () => {
      if (disabled) return;
      const newValue = !checked;
      if (!isControlled) {
        setInternalChecked(newValue);
      }
      onChange?.(newValue);
    };

    return (
      <div className="flex items-center">
        <button
          ref={ref}
          type="button"
          role="switch"
          aria-checked={checked}
          disabled={disabled}
          onClick={handleChange}
          className={cn(
            'relative inline-flex items-center rounded-full transition-colors duration-200',
            currentSize.width,
            currentSize.height,
            'focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-primary)]',
            checked ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]',
            disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
            className
          )}
          {...props}
        >
          <motion.span
            className={cn('transform rounded-full bg-white shadow-md', currentSize.thumb)}
            animate={{
              x: currentSize.translateX,
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30,
            }}
          />
        </button>
        {label && (
          <span className="ml-3 text-[var(--font-size-sm)] text-[var(--color-text-secondary)]">
            {label}
          </span>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';

export default Switch;
