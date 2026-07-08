import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[var(--color-accent)] text-[var(--bg-void)] w-14 h-14 rounded-full flex items-center justify-center shadow-[0_10px_30px_-8px_rgba(0,212,255,0.5)] md:bottom-6.5 md:right-6.5 md:w-14 md:h-14"
      style={{ width: '48px', height: '48px', bottom: '24px', right: '24px' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={22} />
      <motion.div
        className="absolute inset-0 rounded-full bg-[var(--color-accent)] -z-10"
        animate={{
          scale: [1, 1.9],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />
    </motion.a>
  );
};

export default WhatsAppFloat;
