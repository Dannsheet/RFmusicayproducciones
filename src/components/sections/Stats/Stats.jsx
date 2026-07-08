import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import './Stats.css';

const AnimatedCounter = ({ target, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="stat-counter">
      {count}
      {suffix}
    </div>
  );
};

const Stats = () => {
  const stats = [
    { value: 500, label: 'Canciones Producidas', description: 'Tracks lanzados en Spotify, Apple Music y +150 plataformas globales.' },
    { value: 200, label: 'Artistas Trabajados', description: 'Productores independientes y cantautores que llevaron su música al siguiente nivel.' },
    { value: 150, label: 'Países Alcanzados', description: 'Desde Buenos Aires hasta Tokio, tu música llega a todo el mundo.' },
  ];

  return (
    <section className="stats-section">
      {/* Electric cyan gradient - cinematic style */}
      <div className="stats-gradient" />
      <div className="max-w-[1600px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="stats-header"
        >
          <span className="stats-label">
            NUESTRA EXPERIENCIA
          </span>
          <h2 className="stats-title">
            Resultados
          </h2>
          <p className="stats-description">
            Años de experiencia produciendo música de calidad para artistas alrededor del mundo.
          </p>
        </motion.div>

        {/* Editorial layout - horizontal stats with descriptions */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="stat-item"
            >
              <AnimatedCounter target={stat.value} suffix="+" />
              <h3 className="stat-label">
                {stat.label}
              </h3>
              <p className="stat-description">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
