import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'NAVEGACIÓN',
      links: [
        { label: 'Inicio', href: '#hero' },
        { label: 'Servicios', href: '#servicios' },
        { label: 'Proceso', href: '#proceso' },
        { label: 'Contacto', href: '#contacto' },
      ],
    },
    {
      title: 'SERVICIOS',
      links: [
        { label: 'Beats', href: '#servicios' },
        { label: 'Composición', href: '#servicios' },
        { label: 'Mezcla y Máster', href: '#servicios' },
        { label: 'Contacto', href: '#contacto' },
      ],
    },
    {
      title: 'REDES',
      links: [
        { label: 'Instagram', href: '#' },
        { label: 'YouTube', href: '#' },
        { label: 'TikTok', href: '#' },
        { label: 'Spotify', href: '#' },
      ],
    },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-section">
      {/* Electric cyan gradient - cinematic style */}
      <div className="footer-gradient" />
      <div className="max-w-[1600px] mx-auto px-8 relative">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              RF Música y Producciones
            </Link>
            <p className="footer-description">
              Producción musical, beats y distribución global para artistas urbanos.
            </p>
          </div>

          {/* Links */}
          <div className="footer-links">
            {footerLinks.map((group, index) => (
              <div key={index} className="footer-links-group">
                <span className="footer-links-title">
                  {group.title}
                </span>
                {group.links.map((link, i) => (
                  <button
                    key={i}
                    onClick={() => handleNavClick(link.href)}
                    className="footer-link"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span className="footer-copyright">
            © {currentYear} RF Música y Producciones. Todos los derechos reservados.
          </span>
          <div className="footer-legal-links">
            <button className="footer-legal-link">
              Términos
            </button>
            <button className="footer-legal-link">
              Privacidad
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
