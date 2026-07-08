import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';
import { Label } from '../typography';

const Textarea = forwardRef(
  (
    {
      label,
      error,
      helperText,
      disabled = false,
      rows = 4,
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
        <textarea
          ref={ref}
          disabled={disabled}
          rows={rows}
          className={cn(
            'w-full px-4 py-3 bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] rounded-[var(--radius-lg)]',
            'text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)]',
            'transition-all duration-200 resize-none',
            'focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error
              ? 'border-[var(--color-error)] focus:ring-[var(--color-error)]'
              : 'focus:border-[var(--color-accent)]',
            className
          )}
          {...props}
        />
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

Textarea.displayName = 'Textarea';

export default Textarea;
