import { generateMetadata as generateSeoMetadata } from '@/lib/seo'

export const metadata = generateSeoMetadata(
  'About Us',
  'Learn about NOVEXA LABS Inc - 21+ years of enterprise experience architecting mission-critical systems across public sector, telecommunications, finance, and healthcare.',
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
