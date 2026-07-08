import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';
import { Label } from '../typography';

const Checkbox = forwardRef(
  (
    {
      label,
      error,
      disabled = false,
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex items-start">
        <input
          ref={ref}
          type="checkbox"
          disabled={disabled}
          className={cn(
            'w-5 h-5 mt-0.5 rounded border-[var(--color-border)] bg-[var(--color-bg-tertiary)]',
            'text-[var(--color-accent)] focus:ring-[var(--color-accent)] focus:ring-offset-0',
            'transition-all duration-200 cursor-pointer',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error ? 'border-[var(--color-error)]' : '',
            className
          )}
          {...props}
        />
        {label && (
          <Label className="ml-3 cursor-pointer" htmlFor={props.id}>
            {label}
          </Label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
