const platforms = [
  {
    name: 'Instagram',
    handle: '@drinkjuyci',
    url: 'https://instagram.com/drinkjuyci',
    description: 'Behind the scenes, product shots, and the lifestyle that JUYCI was made for.',
  },
  {
    name: 'TikTok',
    handle: '@drinkjuyci',
    url: 'https://tiktok.com/@drinkjuyci',
    description: 'Recipe inspo, launch updates, and whatever is making us feel like it is summer.',
  },
]

export default function SocialsPage() {
  return (
    <div style={{ backgroundColor: '#FAFAF8', minHeight: '100vh' }}>
      <section style={{
        background: 'linear-gradient(135deg, #F2C4CE 0%, #F5ECD7 100%)',
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
          Follow Along
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
          Stay in the glow.
        </h1>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.9rem',
          fontWeight: 300,
          lineHeight: 1.8,
          color: '#6B6B6B',
          maxWidth: '380px',
          margin: '0 auto',
        }}>
          Follow us for launch updates, recipe ideas, and whatever is making us feel like it is summer.
        </p>
      </section>

      <section style={{
        maxWidth: '780px',
        margin: '0 auto',
        padding: '7rem 3rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2rem',
      }}>
        {platforms.map(({ name, handle, url, description }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              backgroundColor: '#F5ECD7',
              padding: '3.5rem',
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
          >
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.68rem',
              fontWeight: 400,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#E8A598',
              marginBottom: '1rem',
            }}>
              {name}
            </p>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '2rem',
              fontWeight: 400,
              color: '#2C2C2C',
              marginBottom: '1.25rem',
              letterSpacing: '0.02em',
            }}>
              {handle}
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.83rem',
              fontWeight: 300,
              lineHeight: 1.8,
              color: '#6B6B6B',
              marginBottom: '2rem',
            }}>
              {description}
            </p>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.68rem',
              fontWeight: 400,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#2C2C2C',
              borderBottom: '1px solid #2C2C2C',
              paddingBottom: '2px',
            }}>
              Follow
            </span>
          </a>
        ))}
      </section>
    </div>
  )
}
