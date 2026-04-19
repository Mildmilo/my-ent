import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Footer } from '@/components/layout/Footer'
import { Nav } from '@/components/layout/Nav'
import '@/styles/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.my-ent.com.au'),
  title: {
    default: 'ENT Surgeons Sydney | Rhinology & Skull Base | My-ENT',
    template: '%s | My-ENT',
  },
  description:
    'My-ENT supports referral-ready patients with appointment requests, referral upload guidance, and practical first-visit information in Sydney.',
  openGraph: {
    type: 'website',
    siteName: 'My-ENT',
    locale: 'en_AU',
    url: 'https://www.my-ent.com.au',
  },
  alternates: {
    canonical: '/',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en-AU"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
