import { motion } from 'framer-motion';
import { Button } from '../../ui';
import { FiMusic, FiMic, FiBook, FiGlobe, FiSliders } from 'react-icons/fi';
import { useRef } from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FiMusic size={48} style={{ width: '48px', height: '48px' }} />,
      title: 'BEATS ORIGINALES',
      description: 'Trap, reggaetón, afrobeat y pop urbano. Licencias exclusivas y no exclusivas para tu próximo single.',
      cta: 'VER BEATS',
      href: '#catalogo',
      featured: true,
    },
    {
      icon: <FiMic size={48} style={{ width: '48px', height: '48px' }} />,
      title: 'COMPOSICIÓN',
      description: 'Letra, melodía, armonía y arreglo. Sesiones en vivo o remotas hasta llegar a tu visión artística.',
      cta: 'COMPOSICIÓN',
      href: '#contacto',
      featured: false,
    },
    {
      icon: <FiSliders size={48} style={{ width: '48px', height: '48px' }} />,
      title: 'MEZCLA Y MÁSTER',
      description: 'Balanceamos, comprimimos y llevamos el loudness al estándar de Spotify, Apple Music y +150 plataformas.',
      cta: 'MEZCLA',
      href: '#contacto',
      featured: false,
    },
  ];

  // Duplicate services for infinite loop
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <section id="servicios" className="services-section">
      {/* Electric cyan gradient - cinematic style */}
      <div className="services-gradient" />

      <div className="max-w-[1600px] mx-auto px-8 relative">
        {/* Centered title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="services-header"
        >
          <h2 className="services-title">
            CONOCE NUESTROS SERVICIOS
          </h2>
        </motion.div>

        {/* Continuous slider - infinite scroll left */}
        <div className="services-slider-container">
          <motion.div
            className="services-slider"
            animate={{
              x: [0, -((services.length * 400) + ((services.length - 1) * 32))],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedServices.map((service, index) => (
              <motion.div
                key={`${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ translateY: -8, scale: 1.02 }}
                className="service-card"
              >
                {/* Icon */}
                <div className={`service-icon ${service.featured ? 'featured' : ''}`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className={`service-title ${service.featured ? 'featured' : ''}`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className={`service-description ${service.featured ? 'featured' : ''}`}>
                  {service.description}
                </p>

                {/* CTA */}
                <Button
                  variant="ghost"
                  onClick={() => document.querySelector(service.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className={`service-cta ${service.featured ? 'featured' : ''}`}
                >
                  {service.cta}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
