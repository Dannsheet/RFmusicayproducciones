import { Link } from 'react-router-dom';
import { cn } from '../../../utils/helpers';

const NavLink = ({ to, children, active = false, className = '', ...props }) => {
  return (
    <Link
      to={to}
      className={cn(
        'inline-flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg',
        active
          ? 'bg-[var(--color-accent)] text-[var(--color-text-primary)]'
          : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)]',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
