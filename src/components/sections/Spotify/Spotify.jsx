import { motion } from 'framer-motion';
import { SPOTIFY_URL } from '../../../config/spotify';
import './Spotify.css';

const Spotify = () => {
  return (
    <section id="spotify" className="spotify-section">
      <div className="spotify-gradient" />
      <div className="max-w-[1600px] mx-auto px-8">
        <div className="spotify-grid">
          {/* Left - Text */}
          <motion.div
            className="spotify-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="spotify-label">
              RADIO DE LA SEMANA 
            </span>
            <h2 className="spotify-title">
              RF musica y producciones
            </h2>
          </motion.div>

          {/* Right - Spotify Embed */}
          <motion.div
            className="spotify-embed-container"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <iframe
              style={{ borderRadius: '24px' }}
              src={SPOTIFY_URL}
              width="100%"
              height="380"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="spotify-iframe"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Spotify;
