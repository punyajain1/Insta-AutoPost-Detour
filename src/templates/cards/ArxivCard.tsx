import React from 'react';

function BookOpenIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function CalendarIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function UserIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ArrowUpRightIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <line x1="7" x2="17" y1="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function ZapIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export const ArxivCard = ({ card }: { card: any }) => {
  const md = card.metadata || {};
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      background: '#ffffff',
      width: '100%',
      fontFamily: 'Inter, sans-serif',
      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        background: '#b31b1b', // arXiv red
        padding: '24px 32px',
        width: '100%'
      }}>
        <div style={{ display: 'flex', marginRight: '16px' }}>
          <BookOpenIcon size={24} color="#ffffff" />
        </div>
        <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '20px' }}>
          Thank you to arXiv for use of its open access interoperability.
        </span>
        <div style={{
          marginLeft: 'auto', background: '#ffffff', color: '#b31b1b', 
          padding: '4px 12px', fontWeight: 700, fontSize: '18px'
        }}>
          {md.category || 'cs.AI'}
        </div>
      </div>
      
      <div style={{ padding: '48px', display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ 
          fontSize: '40px', 
          fontWeight: 800, 
          color: '#000000', 
          lineHeight: 1.3,
          marginBottom: '24px',
          fontFamily: 'Georgia, serif'
        }}>
          {card.title}
        </h1>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#18181b', fontWeight: 600, fontSize: '20px' }}>
            <CalendarIcon size={24} />
            <span>{md.date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#52525b', fontSize: '20px' }}>
            <UserIcon size={24} />
            <span>{md.authors || 'Authors'}</span>
          </div>
        </div>
        
        <div style={{ width: '100%', height: '2px', borderTop: '2px dashed #e4e4e7', marginBottom: '32px' }}></div>
        
        <p style={{
          fontSize: '24px',
          color: '#52525b',
          lineHeight: 1.6,
          marginBottom: '48px',
          fontFamily: 'Georgia, serif'
        }}>
          {card.description}
        </p>
      </div>
    </div>
  );
};

