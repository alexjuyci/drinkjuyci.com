import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'JUYCI — Glow Soda',
  description: 'Sparkling coconut water glow soda. It is summer everyday.',
  openGraph: {
    title: 'JUYCI — Glow Soda',
    description: 'Sparkling coconut water glow soda. It is summer everyday.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
