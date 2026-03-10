export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#F5ECD7',
      padding: '3rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid rgba(242, 196, 206, 0.4)',
    }}>
      <span style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1.1rem',
        fontWeight: 300,
        letterSpacing: '0.1em',
        color: '#2C2C2C',
      }}>
        JUYCI
      </span>
      <span style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.7rem',
        fontWeight: 300,
        letterSpacing: '0.08em',
        color: '#6B6B6B',
      }}>
        hello@drinkjuyci.com
      </span>
      <span style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.7rem',
        fontWeight: 300,
        letterSpacing: '0.08em',
        color: '#6B6B6B',
      }}>
        &copy; 2026 Juyci. All rights reserved.
      </span>
    </footer>
  )
}
