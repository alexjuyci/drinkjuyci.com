import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #FAFAF8 0%, #F5ECD7 50%, #F2C4CE 100%)',
        padding: '8rem 3rem 4rem',
        gap: '6rem',
      }}>
        <div style={{ flex: 1, maxWidth: '480px' }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 400,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#E8A598',
            marginBottom: '1.5rem',
          }}>
            Glow Soda
          </p>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(3.5rem, 7vw, 6rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            color: '#2C2C2C',
            marginBottom: '2rem',
            letterSpacing: '0.02em',
          }}>
            It is summer<br />everyday.
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.9rem',
            fontWeight: 300,
            lineHeight: 1.8,
            color: '#6B6B6B',
            marginBottom: '3rem',
            maxWidth: '360px',
          }}>
            Sparkling coconut water crafted with natural lychee and a touch of zinc. Light, effervescent, and made for the way you live.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link href="/order" style={{
              display: 'inline-block',
              backgroundColor: '#2C2C2C',
              color: '#FAFAF8',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.7rem',
              fontWeight: 400,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '1rem 2.5rem',
            }}>
              Order Now
            </Link>
            <Link href="/ingredients" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.7rem',
              fontWeight: 400,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#6B6B6B',
              textDecoration: 'none',
              borderBottom: '1px solid #6B6B6B',
              paddingBottom: '2px',
            }}>
              What&apos;s Inside
            </Link>
          </div>
        </div>
        <div style={{ flex: 1, maxWidth: '420px', display: 'flex', justifyContent: 'center' }}>
          <Image
            src="/can.jpg"
            alt="JUYCI Lychee Peach Glow Soda"
            width={380}
            height={500}
            style={{ objectFit: 'contain', maxHeight: '70vh' }}
            priority
          />
        </div>
      </section>

      {/* Tagline strip */}
      <section style={{
        backgroundColor: '#F2C4CE',
        padding: '3rem',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          fontWeight: 300,
          fontStyle: 'italic',
          color: '#2C2C2C',
          letterSpacing: '0.05em',
        }}>
          Sparkling coconut water. Natural lychee. A touch of zinc.
        </p>
      </section>

      {/* Features */}
      <section style={{
        backgroundColor: '#FAFAF8',
        padding: '7rem 3rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '4rem',
        }}>
          {[
            { title: 'Coconut Water Base', body: 'Real coconut water, naturally rich in electrolytes. Hydrating without the heaviness.' },
            { title: 'Lychee Peach', body: 'Delicate, floral, effortlessly tropical. Our first flavor is summer in a can.' },
            { title: 'Zinc for Glow', body: 'A trace of zinc gluconate supports your skin from the inside. Beauty that you drink.' },
          ].map(({ title, body }) => (
            <div key={title}>
              <div style={{
                width: '32px',
                height: '1px',
                backgroundColor: '#E8A598',
                marginBottom: '1.5rem',
              }} />
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.4rem',
                fontWeight: 400,
                color: '#2C2C2C',
                marginBottom: '1rem',
                letterSpacing: '0.02em',
              }}>
                {title}
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 300,
                lineHeight: 1.8,
                color: '#6B6B6B',
              }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #F5ECD7, #F2C4CE)',
        padding: '8rem 3rem',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 300,
          color: '#2C2C2C',
          marginBottom: '2rem',
          letterSpacing: '0.02em',
        }}>
          Coming soon to stores near you.
        </h2>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.85rem',
          fontWeight: 300,
          color: '#6B6B6B',
          marginBottom: '3rem',
        }}>
          Be the first to know when JUYCI arrives.
        </p>
        <Link href="/order" style={{
          display: 'inline-block',
          backgroundColor: '#2C2C2C',
          color: '#FAFAF8',
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.7rem',
          fontWeight: 400,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          padding: '1rem 2.5rem',
        }}>
          Notify Me
        </Link>
      </section>
    </div>
  )
}
