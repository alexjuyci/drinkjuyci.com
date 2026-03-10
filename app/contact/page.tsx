export default function ContactPage() {
  return (
    <div style={{ backgroundColor: '#FAFAF8', minHeight: '100vh' }}>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr !important}}`}</style>
      <section className="contact-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '100vh',
      }}>
        {/* Left */}
        <div style={{
          background: 'linear-gradient(160deg, #F5ECD7, #F2C4CE)',
          padding: '12rem 4rem 5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
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
            Contact
          </p>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.5rem, 4vw, 4rem)',
            fontWeight: 300,
            color: '#2C2C2C',
            letterSpacing: '0.02em',
            lineHeight: 1.15,
            marginBottom: '2.5rem',
          }}>
            We would love<br />to hear from you.
          </h1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.68rem',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#E8A598',
                marginBottom: '0.5rem',
              }}>
                General
              </p>
              <a href="mailto:hello@drinkjuyci.com" style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.88rem',
                fontWeight: 300,
                color: '#2C2C2C',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(44,44,44,0.3)',
                paddingBottom: '1px',
              }}>
                hello@drinkjuyci.com
              </a>
            </div>
            <div>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.68rem',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#E8A598',
                marginBottom: '0.5rem',
              }}>
                Press & Partnerships
              </p>
              <a href="mailto:hello@drinkjuyci.com" style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.88rem',
                fontWeight: 300,
                color: '#2C2C2C',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(44,44,44,0.3)',
                paddingBottom: '1px',
              }}>
                hello@drinkjuyci.com
              </a>
            </div>
          </div>
        </div>

        {/* Right */}
        <div style={{
          backgroundColor: '#FAFAF8',
          padding: '12rem 4rem 5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{
                display: 'block',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.68rem',
                fontWeight: 400,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#6B6B6B',
                marginBottom: '0.5rem',
              }}>
                Name
              </label>
              <input type="text" style={{
                width: '100%',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.88rem',
                fontWeight: 300,
                padding: '0.9rem 1rem',
                border: '1px solid rgba(44, 44, 44, 0.15)',
                backgroundColor: 'transparent',
                color: '#2C2C2C',
                outline: 'none',
              }} />
            </div>
            <div>
              <label style={{
                display: 'block',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.68rem',
                fontWeight: 400,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#6B6B6B',
                marginBottom: '0.5rem',
              }}>
                Email
              </label>
              <input type="email" style={{
                width: '100%',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.88rem',
                fontWeight: 300,
                padding: '0.9rem 1rem',
                border: '1px solid rgba(44, 44, 44, 0.15)',
                backgroundColor: 'transparent',
                color: '#2C2C2C',
                outline: 'none',
              }} />
            </div>
            <div>
              <label style={{
                display: 'block',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.68rem',
                fontWeight: 400,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#6B6B6B',
                marginBottom: '0.5rem',
              }}>
                Message
              </label>
              <textarea rows={5} style={{
                width: '100%',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.88rem',
                fontWeight: 300,
                padding: '0.9rem 1rem',
                border: '1px solid rgba(44, 44, 44, 0.15)',
                backgroundColor: 'transparent',
                color: '#2C2C2C',
                outline: 'none',
                resize: 'none',
              }} />
            </div>
            <button type="submit" style={{
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
              alignSelf: 'flex-start',
              marginTop: '0.5rem',
            }}>
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
