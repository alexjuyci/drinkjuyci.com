export default function Footer() {
  return (
    <footer>
      <style>{`
        .footer-inner {
          background-color: #F5ECD7;
          padding: 3rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(242, 196, 206, 0.4);
          flex-wrap: wrap;
          gap: 1rem;
        }
      `}</style>
      <div className="footer-inner">
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
      </div>
    </footer>
  )
}
