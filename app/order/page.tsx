"use client";

import { useState } from 'react';

export default function OrderPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('submitting');

    try {
      const res = await fetch('https://formsubmit.co/ajax/hello@drinkjuyci.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim() || 'Anonymous',
          email: email.trim(),
          _subject: 'New JUYCI Waitlist Signup',
          _template: 'table',
        }),
      });

      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

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

        {status === 'success' ? (
          <>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 300,
              color: '#2C2C2C',
              marginBottom: '1.5rem',
              letterSpacing: '0.02em',
              lineHeight: 1.1,
            }}>
              You are on<br />the list.
            </h1>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9rem',
              fontWeight: 300,
              lineHeight: 1.8,
              color: '#6B6B6B',
              marginBottom: '2.5rem',
            }}>
              We will reach out when JUYCI is ready to ship. Something good is on its way.
            </p>
            {/* Share prompt */}
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.7rem',
              fontWeight: 400,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#B0A090',
              marginBottom: '1.25rem',
            }}>
              Spread the word
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('just joined the @drinkjuyci waitlist ✨ sparkling coconut water with lychee + zinc — something good is on its way')}&url=${encodeURIComponent('https://drinkjuyci.com/order')}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#2C2C2C',
                  border: '1px solid rgba(44,44,44,0.2)',
                  padding: '0.75rem 1.25rem',
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                Share on X
              </a>
              <a
                href={`https://www.instagram.com/drinkjuyci`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#2C2C2C',
                  border: '1px solid rgba(44,44,44,0.2)',
                  padding: '0.75rem 1.25rem',
                  textDecoration: 'none',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                Follow us
              </a>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText('https://drinkjuyci.com/order').catch(() => {});
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#2C2C2C',
                  border: '1px solid rgba(44,44,44,0.2)',
                  padding: '0.75rem 1.25rem',
                  background: 'none',
                  cursor: 'pointer',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                Copy link
              </button>
            </div>
          </>
        ) : (
          <>
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
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
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
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
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
              {status === 'error' && (
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.8rem',
                  color: '#C0392B',
                  margin: 0,
                }}>
                  Something went wrong. Please try again or email us at hello@drinkjuyci.com
                </p>
              )}
              <button
                type="submit"
                disabled={status === 'submitting'}
                style={{
                  backgroundColor: status === 'submitting' ? '#888' : '#2C2C2C',
                  color: '#FAFAF8',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 400,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  border: 'none',
                  padding: '1rem 2.5rem',
                  cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                  marginTop: '0.5rem',
                  transition: 'background-color 0.2s',
                }}
              >
                {status === 'submitting' ? 'Sending…' : 'Notify Me'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
