import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/helpers';
import { FiAlertCircle, FiCheckCircle, FiInfo, FiX } from 'react-icons/fi';

const Toast = forwardRef(
  (
    {
      variant = 'info',
      title,
      children,
      onClose,
      duration = 5000,
      className = '',
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      info: {
        container: 'bg-[var(--color-bg-secondary)] border-[var(--color-info)]',
        icon: 'text-[var(--color-info)]',
      },
      success: {
        container: 'bg-[var(--color-bg-secondary)] border-[var(--color-success)]',
        icon: 'text-[var(--color-success)]',
      },
      warning: {
        container: 'bg-[var(--color-bg-secondary)] border-[var(--color-warning)]',
        icon: 'text-[var(--color-warning)]',
      },
      error: {
        container: 'bg-[var(--color-bg-secondary)] border-[var(--color-error)]',
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
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className={cn(
          'relative flex items-start p-4 rounded-lg border shadow-xl',
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
      </motion.div>
    );
  }
);

Toast.displayName = 'Toast';

export default Toast;
