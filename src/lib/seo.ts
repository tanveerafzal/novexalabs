import { Metadata } from 'next'

const siteConfig = {
  name: 'Logithic',
  description: 'Transform your business with cutting-edge AI-driven software development, dedicated teams, and elite staffing solutions tailored to your needs.',
  url: 'https://logithic.com',
  ogImage: 'https://logithic.com/og-image.png',
  keywords: [
    'software development',
    'custom software',
    'AI solutions',
    'machine learning',
    'dedicated teams',
    'IT staffing',
    'tech talent',
    'cloud services',
    'mobile development',
    'web development',
    'DevOps',
    'digital transformation',
    'software consulting',
    'enterprise software',
    'startup development',
    'MVP development',
    'product development',
    'technology consulting',
    'offshore development',
    'nearshore development',
  ],
  authors: [{ name: 'Logithic', url: 'https://logithic.com' }],
  creator: 'Logithic',
  publisher: 'Logithic',
  category: 'Technology',
  locale: 'en_CA',
  address: {
    street: '6733 Mississauga Rd Suite 700',
    city: 'Mississauga',
    region: 'ON',
    postalCode: 'L5N 6J5',
    country: 'Canada',
  },
  contact: {
    email: 'hello@logithic.com',
    phone: '+1 (555) 123-4567',
  },
  social: {
    twitter: '@logithic',
    linkedin: 'https://linkedin.com/company/logithic',
    github: 'https://github.com/logithic',
  },
}

export function generateMetadata(
  title?: string,
  description?: string,
  path?: string,
  additionalKeywords?: string[]
): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | AI-Powered Software Development & Staffing Solutions`
  const pageDescription = description || siteConfig.description
  const pageUrl = path ? `${siteConfig.url}${path}` : siteConfig.url
  const keywords = [...siteConfig.keywords, ...(additionalKeywords || [])]

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: keywords.join(', '),
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    category: siteConfig.category,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - AI-Powered Software Development`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [siteConfig.ogImage],
      creator: siteConfig.social.twitter,
      site: siteConfig.social.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // Add your verification codes here
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
      // bing: 'your-bing-verification-code',
    },
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: siteConfig.ogImage,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.github,
      `https://twitter.com/${siteConfig.social.twitter.replace('@', '')}`,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      contactType: 'customer service',
      email: siteConfig.contact.email,
      availableLanguage: ['English'],
    },
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateServiceSchema() {
  const services = [
    {
      name: 'Custom Software Development',
      description: 'Tailored software solutions designed to solve your unique business challenges with cutting-edge technology.',
    },
    {
      name: 'Dedicated Development Teams',
      description: 'Scale your development capacity with fully managed, dedicated teams that integrate seamlessly with your workflow.',
    },
    {
      name: 'AI/ML Solutions',
      description: 'Harness the power of artificial intelligence to automate processes and unlock insights from your data.',
    },
    {
      name: 'Cloud Services',
      description: 'Modernize your infrastructure with scalable, secure cloud solutions on AWS, Azure, or Google Cloud.',
    },
    {
      name: 'Mobile Development',
      description: 'Create stunning mobile experiences with native and cross-platform applications for iOS and Android.',
    },
    {
      name: 'IT Staffing',
      description: 'Access top-tier tech talent for permanent, contract, or project-based roles across all skill levels.',
    },
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
          '@type': 'Organization',
          name: siteConfig.name,
        },
      },
    })),
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: siteConfig.ogImage,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.5890,
      longitude: -79.6441,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$$$',
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide',
    },
  }
}

export { siteConfig }
