import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../../utils/helpers';
import { FiX } from 'react-icons/fi';

const Drawer = ({
  isOpen,
  onClose,
  title,
  children,
  position = 'right',
  size = 'md',
  className = '',
  ...props
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const positionStyles = {
    left: 'left-0',
    right: 'right-0',
    top: 'top-0',
    bottom: 'bottom-0',
  };

  const sizeStyles = {
    sm: 'w-80',
    md: 'w-96',
    lg: 'w-[480px]',
    xl: 'w-[600px]',
    full: 'w-full',
  };

  const slideVariants = {
    left: { initial: { x: '-100%' }, animate: { x: 0 }, exit: { x: '-100%' } },
    right: { initial: { x: '100%' }, animate: { x: 0 }, exit: { x: '100%' } },
    top: { initial: { y: '-100%' }, animate: { y: 0 }, exit: { y: '-100%' } },
    bottom: { initial: { y: '100%' }, animate: { y: 0 }, exit: { y: '100%' } },
  };

  const variant = slideVariants[position];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, ...variant.initial }}
            animate={{ opacity: 1, ...variant.animate }}
            exit={{ opacity: 0, ...variant.exit }}
            transition={{ duration: 0.2 }}
            className={cn(
              'fixed bg-[var(--color-bg-secondary)] border-r border-[var(--color-border)] shadow-2xl z-50 h-full',
              positionStyles[position],
              sizeStyles[size],
              className
            )}
            {...props}
          >
            <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)]">
              {title && (
                <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
                  {title}
                </h2>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              >
                <FiX size={20} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto h-full">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
