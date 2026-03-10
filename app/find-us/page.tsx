export default function FindUsPage() {
  return (
    <div style={{ backgroundColor: '#FAFAF8', minHeight: '100vh' }}>
      <section style={{
        background: 'linear-gradient(160deg, #FAFAF8 0%, #F5ECD7 100%)',
        padding: '12rem 3rem 7rem',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.7rem',
          fontWeight: 400,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#E8A598',
          marginBottom: '1.5rem',
        }}>
          Find Us
        </p>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(3rem, 6vw, 5rem)',
          fontWeight: 300,
          color: '#2C2C2C',
          letterSpacing: '0.02em',
          lineHeight: 1.1,
          marginBottom: '2rem',
        }}>
          Coming to stores<br />near you.
        </h1>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.9rem',
          fontWeight: 300,
          lineHeight: 1.8,
          color: '#6B6B6B',
          maxWidth: '440px',
          margin: '0 auto',
        }}>
          We are working on getting JUYCI into the spaces where you already spend your time. Check back soon for a full list of stockists.
        </p>
      </section>

      <section style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '6rem 3rem',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
          backgroundColor: 'rgba(242, 196, 206, 0.3)',
        }}>
          {[
            { city: 'New York', status: 'Coming Soon' },
            { city: 'Los Angeles', status: 'Coming Soon' },
            { city: 'Miami', status: 'Coming Soon' },
            { city: 'San Francisco', status: 'Coming Soon' },
            { city: 'Chicago', status: 'Coming Soon' },
            { city: 'Online', status: 'Launching Soon' },
          ].map(({ city, status }) => (
            <div key={city} style={{
              backgroundColor: '#FAFAF8',
              padding: '3rem 2.5rem',
            }}>
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.6rem',
                fontWeight: 400,
                color: '#2C2C2C',
                marginBottom: '0.75rem',
                letterSpacing: '0.02em',
              }}>
                {city}
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 400,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#E8A598',
              }}>
                {status}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '6rem',
          textAlign: 'center',
          padding: '5rem',
          backgroundColor: '#F5ECD7',
        }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '2rem',
            fontWeight: 300,
            color: '#2C2C2C',
            marginBottom: '1rem',
          }}>
            Want to carry JUYCI?
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.85rem',
            fontWeight: 300,
            color: '#6B6B6B',
            marginBottom: '2rem',
          }}>
            We are actively seeking retail and hospitality partners.
          </p>
          <a href="mailto:hello@drinkjuyci.com" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 400,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#2C2C2C',
            textDecoration: 'none',
            borderBottom: '1px solid #2C2C2C',
            paddingBottom: '2px',
          }}>
            hello@drinkjuyci.com
          </a>
        </div>
      </section>
    </div>
  )
}
