import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'Grabé mi EP completo con Estudio Señal y en tres semanas ya estaba en Spotify en 12 países. El proceso fue increíblemente profesional y el resultado superó todas mis expectativas.',
      author: 'Renata O.',
      role: 'Artista Urbana',
    },
    {
      quote: 'El curso de mezcla me hizo entender por qué mis canciones sonaban planas. Ahora mezclo con confianza real y mis tracks suenan competitivos en todas las plataformas.',
      author: 'Kevin M.',
      role: 'Productor Independiente',
    },
  ];

  return (
    <section className="testimonials-section">
      {/* Electric cyan gradient - cinematic style */}
      <div className="testimonials-gradient" />
      <div className="max-w-[1600px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="testimonials-header"
        >
          <span className="testimonials-label">
            ARTISTAS QUE CONFIAN
          </span>
          <h2 className="testimonials-title">
            Testimonios
          </h2>
          <p className="testimonials-description">
            Productores independientes y cantautores que han llevado su música al siguiente nivel.
          </p>
        </motion.div>

        {/* Editorial layout - large quotes with more space */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="testimonial-item"
            >
              {/* Quote mark */}
              <div className="testimonial-quote-mark">"</div>

              {/* Quote */}
              <blockquote className="testimonial-quote">
                {testimonial.quote}
              </blockquote>

              {/* Author info */}
              <div className="testimonial-author">
                {testimonial.author}
              </div>
              <div className="testimonial-role">
                {testimonial.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
