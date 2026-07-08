import { useState, useRef, useEffect } from 'react';
import { cn } from '../../../utils/helpers';

const Dropdown = ({ trigger, children, className = '', ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
    <div ref={dropdownRef} className="relative inline-block" {...props}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center"
      >
        {trigger}
      </button>
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

const DropdownItem = ({ children, onClick, className = '', ...props }) => {
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

Dropdown.Item = DropdownItem;

export default Dropdown;
