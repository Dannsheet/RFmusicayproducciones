import { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/helpers';

const Toggle = forwardRef(
  (
    {
      label,
      checked: controlledChecked,
      defaultChecked = false,
      onChange,
      disabled = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isControlled = controlledChecked !== undefined;
    const checked = isControlled ? controlledChecked : internalChecked;

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
            'relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200',
            'focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-primary)]',
            checked ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]',
            disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
            className
          )}
          {...props}
        >
          <motion.span
            className="inline-block h-4 w-4 transform rounded-full bg-white shadow-md"
            animate={{
              x: checked ? 20 : 4,
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

Toggle.displayName = 'Toggle';

export default Toggle;
