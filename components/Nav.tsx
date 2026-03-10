'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/order', label: 'Order' },
  { href: '/ingredients', label: 'Ingredients' },
  { href: '/find-us', label: 'Find Us' },
  { href: '/socials', label: 'Socials' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.5rem 3rem',
      backgroundColor: 'rgba(250, 250, 248, 0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(242, 196, 206, 0.2)',
    }}>
      <Link href="/" style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1.5rem',
        fontWeight: 300,
        letterSpacing: '0.15em',
        color: '#2C2C2C',
        textDecoration: 'none',
      }}>
        JUYCI
      </Link>
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {links.map(({ href, label }) => (
          <Link key={href} href={href} style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 400,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: pathname === href ? '#2C2C2C' : '#6B6B6B',
            textDecoration: 'none',
            borderBottom: pathname === href ? '1px solid #2C2C2C' : '1px solid transparent',
            paddingBottom: '2px',
            transition: 'color 0.2s, border-color 0.2s',
          }}>
            {label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
