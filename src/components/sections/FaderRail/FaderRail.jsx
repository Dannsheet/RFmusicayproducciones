import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FaderRail = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollTop / docHeight) * 100, 100);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ticks = ['0', '-6', '-12', '-24', '-∞'];

  return (
    <div
      className="fixed left-4 top-1/2 -translate-y-1/2 h-[300px] w-[24px] flex flex-col items-center pointer-events-none"
      style={{ zIndex: 5, opacity: 0.3 }}
      aria-hidden="true"
    >
      <div className="absolute left-[-24px] top-0 h-full flex flex-col justify-between font-mono text-[8px] tracking-[0.1em] uppercase text-[#5C636D]">
        {ticks.map((tick, index) => (
          <span key={index}>{tick}</span>
        ))}
      </div>
      <div className="relative w-px h-full bg-[#1A1E24]">
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[12px] h-1 bg-[#E8A33D]"
          style={{ bottom: `${scrollProgress}%` }}
          transition={{ duration: 0.05 }}
        />
      </div>
    </div>
  );
};

export default FaderRail;
