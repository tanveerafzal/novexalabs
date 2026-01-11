import { generateMetadata as generateSeoMetadata } from '@/lib/seo'

export const metadata = generateSeoMetadata(
  'About Us',
  'Learn about Logithic Labs Inc - 50+ years of combined enterprise experience architecting mission-critical systems across public sector, telecommunications, finance, and healthcare.',
  '/about',
  ['about us', 'company history', 'enterprise experience', 'mission', 'vision', 'core values']
)

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
