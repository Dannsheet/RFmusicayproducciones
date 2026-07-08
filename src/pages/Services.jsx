import SEO from '../components/seo/SEO';

const Services = () => {
  return (
    <>
      <SEO title="Services" description="Professional music production and sound engineering services" />
      <div className="container py-20">
        <h1 className="heading-1 text-[var(--color-text-primary)] mb-4">Services</h1>
        <p className="body-base text-[var(--color-text-secondary)]">
          Professional music production and sound engineering services
        </p>
      </div>
    </>
  );
};

export default Services;
