import SEO from '../components/seo/SEO';

const Home = () => {
  return (
    <>
      <SEO title="Home" description="Welcome to RF - Music Producer & Sound Engineer" />
      <div className="container py-20">
        <h1 className="heading-1 text-[var(--color-text-primary)] mb-4">Home</h1>
        <p className="body-base text-[var(--color-text-secondary)]">
          Welcome to RF - Music Producer & Sound Engineer
        </p>
      </div>
    </>
  );
};

export default Home;
