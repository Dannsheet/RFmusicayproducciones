import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../../constants/routes';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navbarStyles = `
    fixed top-0 left-0 right-0 z-50
    transition-all duration-300 ease-in-out
    ${isScrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}
  `;

  return (
    <nav className={navbarStyles} style={{ height: '80px' }}>
      <div className="container h-full flex items-center justify-between px-[40px]">
        {/* Logo */}
        <Link 
          to={NAVIGATION_ITEMS[0].path}
          className="flex items-center justify-center hover:scale-105 transition-all duration-300"
        >
          <img 
            src="/Asset2.png" 
            alt="RF Música y Producciones" 
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-12">
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`
                  text-[#A0A0A0] hover:text-[#00D4FF]
                  transition-all duration-300 font-semibold text-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]
                  ${location.pathname === item.path ? 'text-[#00D4FF]' : ''}
                `}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-[#FFFFFF] hover:text-[#00D4FF] transition-colors p-3"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          style={{ minWidth: '48px', minHeight: '48px' }}
        >
          {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden absolute top-full left-0 right-0
          bg-[#0A0A0A]/95 backdrop-blur-md
          transition-all duration-300 ease-in-out overflow-hidden
          ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <ul className="flex flex-col items-center justify-center py-8 gap-6 w-full">
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item.path} className="w-full flex justify-center">
              <Link
                to={item.path}
                onClick={closeMobileMenu}
                className={`
                  px-6 py-3 rounded-lg transition-all duration-200 font-medium text-lg
                  ${item.label === 'HABLEMOS' 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'text-[#A0A0A0] hover:text-[#00D4FF]'
                  }
                  ${location.pathname === item.path && item.label !== 'HABLEMOS' ? 'text-[#00D4FF]' : ''}
                `}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
