import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../ui';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="contact-section">
      {/* Electric cyan gradient - cinematic style */}
      <div className="contact-gradient" />
      <div className="max-w-[1600px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="contact-header"
        >
          <span className="contact-label">
            EMPIEZA TU PROYECTO
          </span>
          <h2 className="contact-title">
            Hablemos
          </h2>
          <p className="contact-description">
            Cuéntanos tu proyecto, visión y objetivos artísticos. Estamos listos para llevar tu música al siguiente nivel.
          </p>
        </motion.div>

        {/* Cinematic layout - centered form, minimal */}
        <div className="contact-form-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="contact-form-card"
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-group">
                <label className="contact-form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-form-input"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="contact-form-group">
                <label className="contact-form-label">
                  Email o WhatsApp
                </label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="contact-form-input"
                  placeholder="Email o WhatsApp"
                />
              </div>

              <div className="contact-form-group">
                <label className="contact-form-label">
                  Servicio
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="contact-form-select"
                >
                  <option value="">Seleccionar servicio</option>
                  <option>Beats</option>
                  <option>Composición</option>
                  <option>Curso de mezcla y máster</option>
                  <option>Distribución / publicación</option>
                </select>
              </div>

              <div className="contact-form-group">
                <label className="contact-form-label">
                  Detalles del proyecto
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="contact-form-textarea"
                  placeholder="Género, referencias, fecha objetivo..."
                />
              </div>

              <Button
                type="submit"
                className="contact-form-button"
              >
                {isSubmitted ? 'ENVIADO ✓' : 'ENVIAR MENSAJE'}
              </Button>
            </form>

            {/* Contact info below form */}
            <div className="contact-info">
              <div className="contact-info-container">
                <div className="contact-info-item">
                  <span className="contact-info-icon">📍</span>
                  <span className="contact-info-text">Buenos Aires, Argentina</span>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-icon">📞</span>
                  <span className="contact-info-text">+54 11 1234 5678</span>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-icon">✉️</span>
                  <span className="contact-info-text">hola@estudiosenal.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
