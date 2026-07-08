import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';
import { Label } from '../typography';

const Select = forwardRef(
  (
    {
      label,
      error,
      helperText,
      disabled = false,
      options = [],
      placeholder = 'Select an option',
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full">
        {label && (
          <Label className="block mb-2" htmlFor={props.id}>
            {label}
          </Label>
        )}
        <select
          ref={ref}
          disabled={disabled}
          className={cn(
            'w-full px-4 py-3 bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] rounded-[var(--radius-lg)]',
            'text-[var(--color-text-primary)]',
            'transition-all duration-200 cursor-pointer',
            'focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error
              ? 'border-[var(--color-error)] focus:ring-[var(--color-error)]'
              : 'focus:border-[var(--color-accent)]',
            className
          )}
          {...props}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {helperText && !error && (
          <p className="mt-1.5 text-[var(--font-size-xs)] text-[var(--color-text-tertiary)]">
            {helperText}
          </p>
        )}
        {error && (
          <p className="mt-1.5 text-[var(--font-size-xs)] text-[var(--color-error)]">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
