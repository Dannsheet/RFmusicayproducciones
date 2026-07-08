import { Link } from 'react-router-dom';
import { cn } from '../../../utils/helpers';
import { FiChevronRight } from 'react-icons/fi';

const Breadcrumb = ({ items, className = '', ...props }) => {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center space-x-2 text-sm', className)} {...props}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <FiChevronRight className="w-4 h-4 text-[var(--color-text-tertiary)]" />}
          {item.href ? (
            <Link
              to={item.href}
              className={cn(
                'transition-colors duration-200',
                index === items.length - 1
                  ? 'text-[var(--color-text-primary)] font-medium'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]'
              )}
            >
              {item.label}
            </Link>
          ) : (
            <span
              className={cn(
                index === items.length - 1
                  ? 'text-[var(--color-text-primary)] font-medium'
                  : 'text-[var(--color-text-secondary)]'
              )}
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
