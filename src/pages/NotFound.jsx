import SEO from '../components/seo/SEO';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <SEO title="404 - Page Not Found" description="The page you are looking for does not exist" />
      <div className="container py-20 text-center">
        <h1 className="heading-1 text-[var(--color-text-primary)] mb-4">404</h1>
        <p className="body-base text-[var(--color-text-secondary)] mb-8">
          The page you are looking for does not exist
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-[var(--color-accent)] text-[var(--color-text-primary)] rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors"
        >
          Go Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
