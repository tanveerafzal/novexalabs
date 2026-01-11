import { generateMetadata as generateSeoMetadata } from '@/lib/seo'

export const metadata = generateSeoMetadata(
  'TrustCredo Verification SDK',
  'Integrate identity verification into your application with the TrustCredo SDK. Simple 3-step integration process with JavaScript.',
  '/test-verification',
  ['SDK', 'identity verification', 'API integration', 'TrustCredo', 'developer documentation']
)

export default function TestVerificationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
