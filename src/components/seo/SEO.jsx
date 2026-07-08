import { Helmet } from 'react-helmet-async';
import { CONFIG } from '../../constants/config';

const SEO = ({ 
  title, 
  description, 
  image = CONFIG.seo.defaultImage,
  url = window.location.href,
  type = 'website',
  noIndex = false
}) => {
  const fullTitle = title ? `${title} | ${CONFIG.site.name}` : CONFIG.seo.defaultTitle;
  const metaDescription = description || CONFIG.seo.defaultDescription;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={`${CONFIG.site.url}${image}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${CONFIG.site.url}${image}`} />
    </Helmet>
  );
};

export default SEO;
