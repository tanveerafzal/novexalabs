import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateServiceSchema,
  generateLocalBusinessSchema,
} from '@/lib/seo'

interface JsonLdProps {
  type?: 'organization' | 'website' | 'services' | 'localBusiness' | 'all'
}

export default function JsonLd({ type = 'all' }: JsonLdProps) {
  const schemas: object[] = []

  if (type === 'all' || type === 'organization') {
    schemas.push(generateOrganizationSchema())
  }
  if (type === 'all' || type === 'website') {
    schemas.push(generateWebsiteSchema())
  }
  if (type === 'all' || type === 'services') {
    schemas.push(generateServiceSchema())
  }
  if (type === 'all' || type === 'localBusiness') {
    schemas.push(generateLocalBusinessSchema())
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
