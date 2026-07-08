import { motion } from 'framer-motion';
import { FiPlay, FiShoppingCart } from 'react-icons/fi';

const Catalog = () => {
  const beats = [
    { id: '048', name: 'MEDIANOCHE', genre: 'TRAP', bpm: 140, price: '$45', tag: 'EXCLUSIVO' },
    { id: '052', name: 'ORILLA', genre: 'AFROBEAT', bpm: 104, price: '$35', tag: 'DISPONIBLE' },
    { id: '057', name: 'VIDRIO', genre: 'POP URBANO', bpm: 96, price: '$40', tag: 'DISPONIBLE' },
    { id: '061', name: 'RUTA 9', genre: 'LO-FI', bpm: 82, price: '$30', tag: 'DISPONIBLE' },
  ];

  return (
    <section id="catalogo" className="bg-[#070707] py-[120px] lg:py-[200px]">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(250, 204, 21, 0.02) 0%, transparent 50%)',
        }}
      />
      <div className="max-w-[1600px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-40"
        >
          <span className="font-body text-sm tracking-[0.2em] uppercase text-[#A1A1AA] mb-3 block">
            BEATS EXCLUSIVOS
          </span>
          <div className="flex justify-between items-end">
            <div>
              <h2 className="font-display font-bold text-[42px] uppercase tracking-[0.005em] leading-[0.95] mb-4 font-extrabold">
                Catálogo
              </h2>
              <p className="font-body text-[18px] text-[#A1A1AA] max-w-[650px] leading-[1.65]">
                Beats originales en trap, reggaetón, afrobeat y más. Licencias exclusivas y no exclusivas.
              </p>
            </div>
            <button className="font-body font-semibold text-sm tracking-[0.04em] px-8 py-3 bg-[#FACC15] text-[#070707] hover:bg-[#EAB308] transition-colors duration-300 uppercase rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hidden md:block">
              VER TODOS LOS BEATS
            </button>
          </div>
        </motion.div>

        {/* Horizontal carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {beats.map((beat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ translateY: -8 }}
              className="group relative bg-[#111111] border border-[rgba(255,255,255,0.08)] overflow-hidden rounded-[24px] hover:border-[#FACC15] hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] transition-all duration-300"
            >
              {/* Cover with overlay - 70% height */}
              <div className="relative aspect-[4/5] bg-[#070707] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                
                {/* Play button */}
                <button className="relative z-10 w-20 h-20 bg-[#FACC15] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(250,204,21,0.4)]">
                  <FiPlay size={28} className="text-[#070707] ml-1" />
                </button>
              </div>

              {/* Info - 30% height */}
              <div className="p-6">
                <div className="font-display font-bold text-[24px] uppercase text-[#FFFFFF] mb-2">
                  {beat.name}
                </div>
                <div className="font-body text-[15px] text-[#A1A1AA] mb-4">
                  {beat.genre} · {beat.bpm} BPM
                </div>
                
                {/* Price and cart */}
                <div className="flex justify-between items-center">
                  <span className="font-display font-bold text-[34px] text-[#FACC15]">
                    {beat.price}
                  </span>
                  <button className="text-[#A1A1AA] hover:text-[#FACC15] hover:scale-110 transition-all duration-300">
                    <FiShoppingCart size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
