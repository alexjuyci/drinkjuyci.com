'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/order', label: 'Order' },
  { href: '/ingredients', label: 'Ingredients' },
  { href: '/find-us', label: 'Find Us' },
  { href: '/socials', label: 'Socials' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.5rem 2rem',
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

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-nav">
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
            }}>
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="hamburger"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.25rem',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
          }}
          aria-label="Menu"
        >
          <span style={{ display: 'block', width: '22px', height: '1px', backgroundColor: '#2C2C2C' }} />
          <span style={{ display: 'block', width: '22px', height: '1px', backgroundColor: '#2C2C2C' }} />
          <span style={{ display: 'block', width: '16px', height: '1px', backgroundColor: '#2C2C2C' }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#FAFAF8',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
        }}>
          <button onClick={() => setOpen(false)} style={{
            position: 'absolute',
            top: '1.5rem',
            right: '2rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            color: '#6B6B6B',
          }}>
            Close
          </button>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '2rem',
              fontWeight: 300,
              color: '#2C2C2C',
              textDecoration: 'none',
              letterSpacing: '0.05em',
            }}>
              {label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
