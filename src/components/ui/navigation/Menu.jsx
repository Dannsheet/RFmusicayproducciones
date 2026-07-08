import { useState, useRef, useEffect } from 'react';
import { cn } from '../../../utils/helpers';

const Menu = ({ trigger, children, className = '', ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className="relative inline-block" {...props}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <div
          className={cn(
            'absolute right-0 mt-2 w-56 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg shadow-xl z-50',
            'py-1 animate-in fade-in slide-in-from-top-2 duration-200',
            className
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

const MenuItem = ({ children, onClick, className = '', ...props }) => {
  return (
    <button
      onClick={() => {
        onClick?.();
      }}
      className={cn(
        'w-full text-left px-4 py-2 text-sm text-[var(--color-text-secondary)]',
        'hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)]',
        'transition-colors duration-200',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const MenuDivider = ({ className = '' }) => {
  return <div className={cn('my-1 border-t border-[var(--color-border)]', className)} />;
};

Menu.Item = MenuItem;
Menu.Divider = MenuDivider;

export default Menu;
