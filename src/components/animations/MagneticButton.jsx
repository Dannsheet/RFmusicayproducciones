import { useRef } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, strength = 0.3, className = '', ...props }) => {
  const buttonRef = useRef(null);

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
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;
