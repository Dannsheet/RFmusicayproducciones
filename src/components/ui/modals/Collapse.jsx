import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../../utils/helpers';

const Collapse = ({ 
  isOpen, 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn('overflow-hidden', className)}
          {...props}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Collapse;
