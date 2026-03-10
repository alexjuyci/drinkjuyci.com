export default function OrderPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #FAFAF8 0%, #F5ECD7 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8rem 3rem',
    }}>
      <div style={{ maxWidth: '520px', width: '100%', textAlign: 'center' }}>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.7rem',
          fontWeight: 400,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#E8A598',
          marginBottom: '1.5rem',
        }}>
          Order
        </p>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(3rem, 6vw, 5rem)',
          fontWeight: 300,
          color: '#2C2C2C',
          marginBottom: '1.5rem',
          letterSpacing: '0.02em',
          lineHeight: 1.1,
        }}>
          Something good<br />is on its way.
        </h1>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.9rem',
          fontWeight: 300,
          lineHeight: 1.8,
          color: '#6B6B6B',
          marginBottom: '3.5rem',
        }}>
          JUYCI is not yet available for purchase. Leave your email and you will be among the first to order when we launch.
        </p>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Your name"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.85rem',
              fontWeight: 300,
              padding: '1rem 1.25rem',
              border: '1px solid rgba(44, 44, 44, 0.2)',
              backgroundColor: 'rgba(250, 250, 248, 0.8)',
              color: '#2C2C2C',
              outline: 'none',
              letterSpacing: '0.02em',
            }}
          />
          <input
            type="email"
            placeholder="Your email"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.85rem',
              fontWeight: 300,
              padding: '1rem 1.25rem',
              border: '1px solid rgba(44, 44, 44, 0.2)',
              backgroundColor: 'rgba(250, 250, 248, 0.8)',
              color: '#2C2C2C',
              outline: 'none',
              letterSpacing: '0.02em',
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#2C2C2C',
              color: '#FAFAF8',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.7rem',
              fontWeight: 400,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              border: 'none',
              padding: '1rem 2.5rem',
              cursor: 'pointer',
              marginTop: '0.5rem',
            }}
          >
            Notify Me
          </button>
        </form>
      </div>
    </div>
  )
}
