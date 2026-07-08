import { Link } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../../constants/routes';
import { CONFIG } from '../../constants/config';

const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Navigation */}
          <div>
            <h3 className="text-[var(--color-text-primary)] font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-[var(--color-text-primary)] font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={CONFIG.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href={CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={CONFIG.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href={CONFIG.social.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  Spotify
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[var(--color-text-primary)] font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[var(--color-border)] text-center">
          <p className="text-[var(--color-text-tertiary)] text-sm">
            © {new Date().getFullYear()} {CONFIG.site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
