import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';
import { FiAlertCircle, FiCheckCircle, FiInfo, FiX } from 'react-icons/fi';

const Alert = forwardRef(
  (
    {
      variant = 'info',
      title,
      children,
      onClose,
      className = '',
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      info: {
        container: 'bg-[var(--color-info-muted)] border-[var(--color-info)]',
        icon: 'text-[var(--color-info)]',
      },
      success: {
        container: 'bg-[var(--color-success-muted)] border-[var(--color-success)]',
        icon: 'text-[var(--color-success)]',
      },
      warning: {
        container: 'bg-[var(--color-warning-muted)] border-[var(--color-warning)]',
        icon: 'text-[var(--color-warning)]',
      },
      error: {
        container: 'bg-[var(--color-error-muted)] border-[var(--color-error)]',
        icon: 'text-[var(--color-error)]',
      },
    };

    const icons = {
      info: FiInfo,
      success: FiCheckCircle,
      warning: FiAlertCircle,
      error: FiAlertCircle,
    };

    const Icon = icons[variant];
    const styles = variantStyles[variant];

    return (
      <div
        ref={ref}
        className={cn(
          'relative flex items-start p-4 rounded-lg border',
          styles.container,
          className
        )}
        {...props}
      >
        <Icon className={cn('flex-shrink-0 w-5 h-5 mt-0.5', styles.icon)} />
        <div className="ml-3 flex-1">
          {title && (
            <h3 className="text-sm font-medium text-[var(--color-text-primary)]">
              {title}
            </h3>
          )}
          <div className={cn('text-sm text-[var(--color-text-secondary)]', title && 'mt-1')}>
            {children}
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 flex-shrink-0 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            <FiX size={18} />
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';

export default Alert;
