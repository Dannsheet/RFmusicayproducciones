import { motion } from 'framer-motion';

const Ticker = () => {
  const items = [
    'Beats originales',
    'Composición a medida',
    'Mezcla y máster',
    'Distribución en +150 países',
    'Respuesta en 24h',
  ];

  return (
    <div 
      className="overflow-hidden relative z-10 py-4"
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, '-50%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#A8ADB6] px-8"
          >
            {item}
            <span className="text-[#E8A33D] mx-4">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Ticker;
