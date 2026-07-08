import SEO from '../components/seo/SEO';

const Contact = () => {
  return (
    <>
      <SEO title="Contact" description="Get in touch with RF for music production services" />
      <div className="container py-20">
        <h1 className="heading-1 text-[var(--color-text-primary)] mb-4">Contact</h1>
        <p className="body-base text-[var(--color-text-secondary)]">
          Get in touch with RF for music production services
        </p>
      </div>
    </>
  );
};

export default Contact;
