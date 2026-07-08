import SEO from '../components/seo/SEO';

const Courses = () => {
  return (
    <>
      <SEO title="Courses" description="Learn music production with our comprehensive courses" />
      <div className="container py-20">
        <h1 className="heading-1 text-[var(--color-text-primary)] mb-4">Courses</h1>
        <p className="body-base text-[var(--color-text-secondary)]">
          Learn music production with our comprehensive courses
        </p>
      </div>
    </>
  );
};

export default Courses;
