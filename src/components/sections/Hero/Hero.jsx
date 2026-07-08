import { motion } from 'framer-motion';
import { Button } from '../../ui';
import { FiChevronDown } from 'react-icons/fi';
import './Hero.css';

const STORAGE_BASE = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/imagenes`;

const DESKTOP_IMAGE = `${STORAGE_BASE}/sound-designer-working-track-recording-with-audio-professional-software_resultado.webp`;
const MOBILE_IMAGE = `${STORAGE_BASE}/sound-designer-recording-his-electronic-piano-notes-home-studio_resultado.webp`;

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      {/* Background image with responsive sources */}
      <motion.div 
        className="hero-background"
        style={{
          backgroundImage: `url(${DESKTOP_IMAGE})`,
        }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <div className="hero-background-image" />
        <style>{`
          @media (max-width: 768px) {
            .hero-background {
              background-image: url("${MOBILE_IMAGE}") !important;
            }
          }
        `}</style>
      </motion.div>
      
      {/* Dark overlay - 55% opacity */}
      <div className="hero-dark-overlay" />
      
      {/* Gradient overlay - left to right */}
      <div className="hero-gradient-overlay" />
      
      {/* Electric cyan overlay for cinematic lighting */}
      <div 
        className="hero-overlay"
        aria-hidden="true"
      />

      {/* Content - 60/40 split */}
      <div className="hero-content">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="hero-grid">
            {/* Left - Content (50%) */}
            <motion.div
              className="hero-content-left"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Technical label with bold typography - single row */}
              <div className="hero-label-container">
                <motion.h1 
                  className="hero-label"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  Producción Musical
                  <br />
                  Beats
                  <br />
                  Distribución Global
                </motion.h1>
              </div>
            </motion.div>

            {/* Right - Empty spacer (50%) */}
            <div className="lg:col-span-6" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
