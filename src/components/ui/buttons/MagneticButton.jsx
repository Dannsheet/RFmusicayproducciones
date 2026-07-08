import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/helpers';

const MagneticButton = ({ children, className = '', strength = 0.3, ...props }) => {
  const buttonRef = useRef(null);
  const boundsRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    
    const bounds = buttonRef.current.getBoundingClientRect();
    const mouseX = e.clientX - bounds.left - bounds.width / 2;
    const mouseY = e.clientY - bounds.top - bounds.height / 2;
    
    buttonRef.current.style.transform = `translate(${mouseX * strength}px, ${mouseY * strength}px)`;
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    buttonRef.current.style.transform = 'translate(0px, 0px)';
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'inline-flex items-center justify-center font-semibold transition-transform duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]',
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;
