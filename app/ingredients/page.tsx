const ingredients = [
  {
    name: 'Sparkling Water',
    description: 'The base. Clean, crisp carbonation that gives JUYCI its signature effervescence. We use lightly carbonated water for a gentle, refreshing bubble — never aggressive.',
    detail: 'Zero calories. Zero compromise.',
  },
  {
    name: 'Coconut Water',
    description: 'Young coconut water forms the heart of every can. Naturally occurring electrolytes — potassium, magnesium, sodium — hydrate the way your body actually wants.',
    detail: 'Sourced from young green coconuts.',
  },
  {
    name: 'Natural Lychee & Peach Flavor',
    description: 'Delicate, floral lychee paired with the warmth of ripe peach. Our flavor is derived from real fruit — not artificial compounds. The result is something that tastes like summer without trying too hard.',
    detail: 'No artificial flavors. No sweeteners.',
  },
  {
    name: 'Zinc Gluconate',
    description: 'A trace mineral that supports skin integrity and normal cellular function. We include a thoughtful 2.5mg per serving — enough to matter, not enough to overwhelm. Beauty has always been something you nourish, not something you paint on.',
    detail: '2.5mg elemental zinc per serving.',
  },
  {
    name: 'Citric Acid',
    description: 'A naturally occurring acid found in citrus fruit. It balances the sweetness of coconut water with a clean tartness and extends shelf life without artificial preservatives.',
    detail: 'Naturally sourced.',
  },
]

export default function IngredientsPage() {
  return (
    <div style={{ backgroundColor: '#FAFAF8', minHeight: '100vh' }}>
      {/* Header */}
      <section style={{
        background: 'linear-gradient(135deg, #F5ECD7, #F2C4CE)',
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
          What is Inside
        </p>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(3rem, 6vw, 5rem)',
          fontWeight: 300,
          color: '#2C2C2C',
          letterSpacing: '0.02em',
          lineHeight: 1.1,
          maxWidth: '600px',
          margin: '0 auto 2rem',
        }}>
          Nothing hidden.<br />Everything intentional.
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
          Five ingredients. Each one chosen with purpose. JUYCI is what happens when you stop adding and start editing.
        </p>
      </section>

      {/* Ingredients List */}
      <section style={{
        maxWidth: '780px',
        margin: '0 auto',
        padding: '7rem 3rem',
      }}>
        {ingredients.map((item, i) => (
          <div key={item.name} style={{
            paddingBottom: '4rem',
            marginBottom: '4rem',
            borderBottom: i < ingredients.length - 1 ? '1px solid rgba(242, 196, 206, 0.5)' : 'none',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '3rem' }}>
              <span style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1rem',
                fontWeight: 300,
                color: '#E8A598',
                minWidth: '2rem',
                marginTop: '0.4rem',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '2rem',
                  fontWeight: 400,
                  color: '#2C2C2C',
                  marginBottom: '1rem',
                  letterSpacing: '0.02em',
                }}>
                  {item.name}
                </h2>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.88rem',
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: '#6B6B6B',
                  marginBottom: '1rem',
                }}>
                  {item.description}
                </p>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#E8A598',
                }}>
                  {item.detail}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
