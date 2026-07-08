import SEO from '../components/seo/SEO';

const Portfolio = () => {
  return (
    <>
      <SEO title="Portfolio" description="Explore our portfolio of music production projects" />
      <div className="container py-20">
        <h1 className="heading-1 text-[var(--color-text-primary)] mb-4">Portfolio</h1>
        <p className="body-base text-[var(--color-text-secondary)]">
          Explore our portfolio of music production projects
        </p>
      </div>
    </>
  );
};

export default Portfolio;
