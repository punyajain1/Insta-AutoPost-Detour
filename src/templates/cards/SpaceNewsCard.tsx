import React from 'react';

function RssIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  );
}

function ClockIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ArrowUpRightIcon({ size = 28, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <line x1="7" x2="17" y1="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export const SpaceNewsCard = ({ card }: { card: any }) => {
  const md = card.metadata || {};
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      background: '#ffffff',
      width: '100%',
      fontFamily: 'Inter, sans-serif',
      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
      borderRadius: '16px',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '24px 32px',
        width: '100%',
        background: '#ffffff',
      }}>
        <div style={{ display: 'flex', marginRight: '12px' }}>
          <RssIcon size={24} color="#3b82f6" />
        </div>
        <span style={{ color: '#3b82f6', fontWeight: 800, fontSize: '18px', letterSpacing: '0.05em' }}>
          AEROSPACE BULLETIN
        </span>
        <div style={{
          marginLeft: 'auto', background: '#e2e8f0', color: '#64748b', 
          padding: '6px 16px', fontWeight: 700, fontSize: '16px', borderRadius: '100px'
        }}>
          NASA
        </div>
      </div>
      
      {/* Image */}
      {card.imageUrl ? (
        <div style={{ width: '100%', height: '400px', display: 'flex', background: '#000000' }}>
            <img src={card.imageUrl} alt="Mars" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      ) : (
        <div style={{ width: '100%', height: '400px', display: 'flex', background: '#f4f4f5', alignItems: 'center', justifyContent: 'center', color: '#a1a1aa' }}>
            No Image Available
        </div>
      )}

      <div style={{ padding: '48px', display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ 
          fontSize: '40px', 
          fontWeight: 800, 
          color: '#000000', 
          lineHeight: 1.3,
          marginBottom: '24px',
        }}>
          {card.title}
        </h1>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#71717a', fontSize: '20px', marginBottom: '32px' }}>
            <ClockIcon size={20} color="#71717a" /><span>{md.date || 'Mon, September 21, 2026'}</span>
        </div>
        
        <p style={{
          fontSize: '24px',
          color: '#52525b',
          lineHeight: 1.6,
          marginBottom: '48px'
        }}>
          {card.description}
        </p>
      </div>
    </div>
  );
};

