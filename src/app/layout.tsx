import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Logithic | AI-Powered Software Development & Staffing Solutions',
  description: 'Transform your business with cutting-edge AI-driven software development, dedicated teams, and elite staffing solutions tailored to your needs.',
  keywords: 'software development, AI solutions, staffing, dedicated teams, custom software, technology consulting',
  openGraph: {
    title: 'Logithic | AI-Powered Software Development & Staffing',
    description: 'Transform your business with cutting-edge AI-driven software development and staffing solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="ai-grid neural-bg min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
