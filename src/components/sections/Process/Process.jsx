import { motion } from 'framer-motion';
import './Process.css';

const Process = () => {
  const steps = [
    { num: '01', title: 'Contacto', description: 'Cuéntanos tu proyecto, visión y objetivos artísticos. Analizamos tu referencia y definimos dirección.' },
    { num: '02', title: 'Producción', description: 'Componemos, grabamos o producimos tu track. Sesiones en vivo o remotas según tu disponibilidad.' },
    { num: '03', title: 'Mezcla y Máster', description: 'Balanceamos, comprimimos y llevamos el loudness al estándar de Spotify, Apple Music y +150 plataformas.' },
    { num: '04', title: 'Lanzamiento', description: 'Publicamos globalmente con metadata e ISRC en regla. Tu música en todas las plataformas.' },
  ];

  return (
    <section id="proceso" className="process-section">
      {/* Electric cyan gradient - cinematic style */}
      <div className="process-gradient" />

      <div className="max-w-[1600px] mx-auto px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="process-header"
        >
          <span className="process-label">
            CÓMO TRABAJAMOS
          </span>
          <h2 className="process-title">
            Proceso
          </h2>
          <p className="process-description">
            Un flujo de trabajo transparente desde el primer contacto hasta el lanzamiento global.
          </p>
        </motion.div>

        {/* Editorial layout - vertical steps with more space */}
        <div className="process-steps">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="process-step"
            >
              {/* Number indicator */}
              <div className="process-step-number">
                <div className="process-step-number-box">
                  <span className="process-step-number-text">
                    {step.num}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="process-step-content">
                <h4 className="process-step-title">
                  {step.title}
                </h4>
                <p className="process-step-description">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
