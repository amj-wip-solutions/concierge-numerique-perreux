import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Lebonclick - Concierge Numérique'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 72,
          background: 'linear-gradient(135deg, #f1f5f9 0%, #ccfbf1 50%, #e2e8f0 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '60px',
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: 30,
              lineHeight: 1.2,
            }}
          >
            Votre concierge numérique
            <br />
            <span style={{ color: '#14b8a6' }}>de confiance</span>
          </h1>
          <p
            style={{
              fontSize: 36,
              color: '#334155',
              marginBottom: 20,
            }}
          >
            Dépannage • Formation • Accompagnement
          </p>
          <div
            style={{
              background: 'white',
              padding: '15px 30px',
              borderRadius: 12,
              fontSize: 24,
              color: '#14b8a6',
              fontWeight: 600,
              marginTop: 30,
            }}
          >
            Le Perreux-sur-Marne
          </div>
          <div
            style={{
              fontSize: 42,
              fontWeight: 'bold',
              color: '#1e293b',
              marginTop: 40,
            }}
          >
            ☎️ 07 44 98 57 23
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

