"use client";

import { useState } from 'react';

export default function WaitlistPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [cityState, setCityState] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !cityState.trim()) return;
    setStatus('submitting');

    try {
      const res = await fetch('https://formsubmit.co/ajax/alex@drinkjuyci.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          'First Name': firstName.trim(),
          'Last Name': lastName.trim(),
          'Email': email.trim(),
          'City, State': cityState.trim(),
          _subject: 'New JUYCI Waitlist Signup',
          _template: 'table',
        }),
      });
      if (res.ok) {
        setStatus('success');
        setFirstName(''); setLastName(''); setEmail(''); setCityState('');
      } else setStatus('error');
    } catch { setStatus('error'); }
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', fontWeight: 300,
    padding: '1rem 1.25rem', border: '1px solid rgba(44, 44, 44, 0.25)',
    borderRadius: 0, backgroundColor: 'rgba(250, 250, 248, 0.8)', color: '#2C2C2C',
    outline: 'none', letterSpacing: '0.02em', width: '100%',
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(160deg, #FAFAF8 0%, #F5ECD7 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8rem 3rem' }}>
      <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center' }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E8A598', marginBottom: '1.5rem' }}>Waitlist</p>
        {status === 'success' ? <>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, color: '#2C2C2C', marginBottom: '1.5rem', letterSpacing: '0.02em', lineHeight: 1.1 }}>You are on<br />the list.</h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.8, color: '#6B6B6B', marginBottom: '2.5rem' }}>We will reach out when JUYCI is ready to ship. Something good is on its way.</p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('just joined the @drinkjuyci waitlist ✨ sparkling coconut water with lychee + peach — something good is on its way')}&url=${encodeURIComponent('https://drinkjuyci.com/waitlist')}`} target="_blank" rel="noopener noreferrer" style={{ fontFamily:'Inter, sans-serif', fontSize:'0.7rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'#2C2C2C', border:'1px solid rgba(44,44,44,0.2)', padding:'0.75rem 1.25rem', textDecoration:'none' }}>Share on X</a>
            <a href="https://www.instagram.com/drinkjuyci" target="_blank" rel="noopener noreferrer" style={{ fontFamily:'Inter, sans-serif', fontSize:'0.7rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'#2C2C2C', border:'1px solid rgba(44,44,44,0.2)', padding:'0.75rem 1.25rem', textDecoration:'none' }}>Follow us</a>
          </div>
        </> : <>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 300, color: '#2C2C2C', marginBottom: '1.5rem', letterSpacing: '0.02em', lineHeight: 1.1 }}>Something good<br />is on its way.</h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.8, color: '#6B6B6B', marginBottom: '3.5rem' }}>Join the waitlist and be among the first to know when JUYCI is ready.</p>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(2, minmax(0, 1fr))', gap:'1rem' }}>
              <input type="text" placeholder="First name" value={firstName} onChange={e=>setFirstName(e.target.value)} required style={inputStyle}/>
              <input type="text" placeholder="Last name" value={lastName} onChange={e=>setLastName(e.target.value)} required style={inputStyle}/>
            </div>
            <input type="email" placeholder="Email address" value={email} onChange={e=>setEmail(e.target.value)} required style={inputStyle}/>
            <input type="text" placeholder="City, State" value={cityState} onChange={e=>setCityState(e.target.value)} required style={inputStyle}/>
            {status === 'error' && <p style={{ fontFamily:'Inter, sans-serif', fontSize:'0.8rem', color:'#C0392B', margin:0 }}>Something went wrong. Please try again or email us at hello@drinkjuyci.com</p>}
            <button type="submit" disabled={status==='submitting'} style={{ backgroundColor:status==='submitting'?'#888':'#2C2C2C', color:'#FAFAF8', fontFamily:'Inter, sans-serif', fontSize:'0.7rem', fontWeight:400, letterSpacing:'0.15em', textTransform:'uppercase', border:'none', borderRadius:0, padding:'1rem 2.5rem', cursor:status==='submitting'?'not-allowed':'pointer', marginTop:'0.5rem' }}>{status==='submitting'?'Sending…':'Join Waitlist'}</button>
          </form>
        </>}
      </div>
    </div>
  );
}
