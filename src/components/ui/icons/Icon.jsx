import { forwardRef } from 'react';
import { cn } from '../../../utils/helpers';

const Icon = forwardRef(({ icon: IconComponent, size = 24, className = '', ...props }, ref) => {
  if (!IconComponent) return null;

  return (
    <IconComponent
      ref={ref}
      size={size}
      className={cn('flex-shrink-0', className)}
      {...props}
    />
  );
});

Icon.displayName = 'Icon';

export default Icon;
