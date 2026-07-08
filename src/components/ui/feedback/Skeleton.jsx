import { cn } from '../../../utils/helpers';

const Skeleton = ({ className = '', variant = 'default', ...props }) => {
  const variantStyles = {
    default: 'h-4 w-full',
    circle: 'rounded-full',
    text: 'h-4 w-3/4',
    avatar: 'h-10 w-10 rounded-full',
    button: 'h-10 w-24 rounded-lg',
    card: 'h-32 w-full',
  };

  return (
    <div
      className={cn(
        'animate-pulse bg-[var(--color-bg-tertiary)] rounded',
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
};

export default Skeleton;
