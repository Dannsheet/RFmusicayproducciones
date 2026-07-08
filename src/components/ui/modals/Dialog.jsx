import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';

const Dialog = forwardRef(({ 
  isOpen, 
  onClose, 
  title, 
  description, 
  children, 
  className = '',
  ...props 
}, ref) => {
  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      {...props}
    >
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={cn(
          'relative bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl shadow-2xl w-full max-w-md p-6',
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
      >
        {title && (
          <h3
            id="dialog-title"
            className="text-lg font-semibold text-[var(--color-text-primary)] mb-2"
          >
            {title}
          </h3>
        )}
        {description && (
          <p className="text-sm text-[var(--color-text-secondary)] mb-6">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
});

Dialog.displayName = 'Dialog';

export default Dialog;
