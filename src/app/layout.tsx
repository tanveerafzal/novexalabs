import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { generateMetadata as generateSeoMetadata } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  ...generateSeoMetadata(),
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  other: {
    'msapplication-TileColor': '#0c4a6e',
    'theme-color': '#0c4a6e',
  },
}

export const viewport: Viewport = {
  themeColor: '#0c4a6e',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd type="all" />
      </head>
      <body className={inter.className}>
        <div className="ai-grid neural-bg min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
