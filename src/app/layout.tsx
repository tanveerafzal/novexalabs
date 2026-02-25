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
    'msapplication-TileColor': '#1a1f4b',
    'theme-color': '#1a1f4b',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1f4b',
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
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  )
}
