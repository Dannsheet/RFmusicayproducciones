import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { Button } from '../../ui';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Beats', href: '#catalogo' },
    { label: 'Cursos', href: '#cursos' },
    { label: 'Distribución', href: '#precios' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#070707]/70 backdrop-blur-xl h-[72px] border-b border-[rgba(255,255,255,0.08)]'
          : 'bg-[#070707] h-[72px]'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-[1280px] mx-auto px-8 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center justify-center hover:scale-105 transition-all duration-300 pl-4">
          <img 
            src="/Asset2.png" 
            alt="RF Música y Producción" 
            className="h-[2rem] w-auto max-w-[120px] max-w-none"
            style={{ maxWidth: '120px' }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-body text-sm text-[#A1A1AA] hover:text-[#FACC15] transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FACC15] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick('#contacto')}
              className="font-body font-semibold text-sm tracking-[0.04em] px-6 py-3 bg-[#FACC15] text-[#070707] hover:bg-[#EAB308] transition-colors duration-300 uppercase rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              HABLEMOS
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#FFFFFF] transition-colors"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden absolute top-[72px] left-0 right-0 bg-[#070707]/95 backdrop-blur-xl border-b border-[rgba(255,255,255,0.08)] flex flex-col p-6 gap-6"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left font-body text-sm text-[#A1A1AA] hover:text-[#FACC15] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FACC15] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contacto')}
              className="font-body font-semibold text-sm tracking-[0.04em] px-6 py-3 bg-[#FACC15] text-[#070707] hover:bg-[#EAB308] transition-colors duration-300 uppercase rounded-xl mt-4 text-center"
            >
              HABLEMOS
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
