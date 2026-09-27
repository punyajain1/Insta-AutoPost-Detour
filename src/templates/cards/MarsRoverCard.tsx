import React from 'react';

function ApertureIcon({ size = 16, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <circle cx="12" cy="12" r="10" />
      <line x1="14.31" x2="20.05" y1="8" y2="17.94" />
      <line x1="9.69" x2="21.17" y1="8" y2="8" />
      <line x1="7.38" x2="13.12" y1="12" y2="2.06" />
      <line x1="9.69" x2="3.95" y1="16" y2="6.06" />
      <line x1="14.31" x2="2.83" y1="16" y2="16" />
      <line x1="16.62" x2="10.88" y1="12" y2="21.94" />
    </svg>
  );
}

function ArrowRightIcon({ size = 28, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <line x1="5" x2="19" y1="12" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export const MarsRoverCard = ({ card }: { card: any }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      background: '#09090b',
      width: '100%',
      fontFamily: 'Inter, sans-serif',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
      borderRadius: '24px',
      overflow: 'hidden'
    }}>
      {/* Image */}
      {card.imageUrl ? (
        <div style={{ width: '100%', height: '500px', display: 'flex', background: '#000000' }}>
            <img src={card.imageUrl} alt="Mars Rover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      ) : (
        <div style={{ width: '100%', height: '500px', display: 'flex', background: '#18181b', alignItems: 'center', justifyContent: 'center', color: '#52525b' }}>
            No Image Available
        </div>
      )}

      <div style={{ padding: '48px', display: 'flex', flexDirection: 'column' }}>
        <div style={{
            display: 'flex', alignItems: 'center', gap: '8px', background: '#27272a', color: '#a1a1aa', 
            padding: '8px 16px', borderRadius: '8px', fontWeight: 600, fontSize: '16px', letterSpacing: '0.05em',
            alignSelf: 'flex-start', marginBottom: '24px'
        }}>
            <ApertureIcon size={16} color="#a1a1aa" /><span>SPACE</span>
        </div>
        
        <h1 style={{ 
          fontSize: '40px', 
          fontWeight: 700, 
          color: '#ffffff', 
          lineHeight: 1.3,
          marginBottom: '32px',
        }}>
          {card.title}
        </h1>
        
        <p style={{
          fontSize: '24px',
          color: '#a1a1aa',
          lineHeight: 1.6,
          marginBottom: '64px'
        }}>
          {card.description}
        </p>
      </div>
    </div>
  );
};

