import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../../utils/helpers';
import { FiChevronDown } from 'react-icons/fi';

const Accordion = ({ items, className = '', ...props }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={cn('space-y-2', className)} {...props}>
      {items.map((item, index) => (
        <div key={index} className="border border-[var(--color-border)] rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-4 text-left bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
          >
            <span className="font-medium text-[var(--color-text-primary)]">{item.title}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiChevronDown className="text-[var(--color-text-secondary)]" size={20} />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)]">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
