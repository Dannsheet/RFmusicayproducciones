import { cn } from '../../../utils/helpers';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Pagination = ({ currentPage, totalPages, onPageChange, className = '', ...props }) => {
  const pages = [];
  const showEllipsis = totalPages > 7;

  if (showEllipsis) {
    if (currentPage <= 4) {
      for (let i = 1; i <= 5; i++) pages.push(i);
      pages.push('...');
      pages.push(totalPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push(1);
      pages.push('...');
      for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      pages.push('...');
      for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
      pages.push('...');
      pages.push(totalPages);
    }
  } else {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  }

  return (
    <nav aria-label="Pagination" className={cn('flex items-center space-x-2', className)} {...props}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          'p-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)]',
          'text-[var(--color-text-secondary)] transition-all duration-200',
          'hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
          'disabled:opacity-50 disabled:cursor-not-allowed'
        )}
      >
        <FiChevronLeft size={20} />
      </button>
      
      {pages.map((page, index) => (
        page === '...' ? (
          <span key={`ellipsis-${index}`} className="px-3 py-2 text-[var(--color-text-tertiary)]">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              'px-4 py-2 rounded-lg border transition-all duration-200',
              currentPage === page
                ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-[var(--color-text-primary)]'
                : 'bg-[var(--color-bg-secondary)] border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
            )}
          >
            {page}
          </button>
        )
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          'p-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)]',
          'text-[var(--color-text-secondary)] transition-all duration-200',
          'hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
          'disabled:opacity-50 disabled:cursor-not-allowed'
        )}
      >
        <FiChevronRight size={20} />
      </button>
    </nav>
  );
};

export default Pagination;
