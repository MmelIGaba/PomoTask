import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url }) => {
  const siteTitle = 'Mmeli Gabriel Dyantyi | Freelance Fullstack Developer South Africa';
  const defaultDescription = 'Mmeli Gabriel Dyantyi - Freelance Fullstack Developer South Africa specializing in web & mobile apps, AI integration, MS Power Platform automation, software redesign, and digital marketing for businesses and startups.';
  const defaultImage = '/msgwebworks-logo1.png';
  const siteUrl = 'https://personal-site-zeta-silk.vercel.app/';

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={`${siteUrl}${image || defaultImage}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url || siteUrl} />
      <meta property="twitter:title" content={title || siteTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={`${siteUrl}${image || defaultImage}`} />

      {/* Additional meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#FF8C09" />
      <link rel="canonical" href={url || siteUrl} />
    </Helmet>
  );
};

export default SEO;
