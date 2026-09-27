import React from 'react';

function ArrowUpIcon({ size = 28, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <line x1="12" x2="12" y1="19" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </svg>
  );
}

export const PapersWithCodeCard = ({ card }: { card: any }) => {
  const md = card.metadata || {};
  
  return (
    <div style={{
      display: 'flex',
      background: '#ffffff',
      width: '100%',
      fontFamily: 'Inter, sans-serif',
      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
      padding: '48px',
      gap: '48px',
      alignItems: 'center'
    }}>
      {/* Left Thumbnail */}
      <div style={{
        display: 'flex',
        width: '300px',
        height: '420px',
        border: '1px solid #e4e4e7',
        background: '#f4f4f5',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        padding: '16px',
        flexDirection: 'column'
      }}>
        <div style={{ color: '#2563eb', fontSize: '12px', fontWeight: 700, marginBottom: '8px' }}>
          {card.title}
        </div>
        <div style={{ color: '#a1a1aa', fontSize: '8px' }}>
          {card.description?.substring(0, 300)}
        </div>
      </div>
      
      {/* Right Content */}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', width: '100%', alignItems: 'flex-start' }}>
          <h1 style={{ 
            fontSize: '40px', 
            fontWeight: 700, 
            color: '#18181b', 
            lineHeight: 1.3,
            marginBottom: '24px',
            fontFamily: 'Georgia, serif',
            flex: 1,
            paddingRight: '32px'
          }}>
            {card.title}
          </h1>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', alignItems: 'center', color: '#6366f1', fontWeight: 700, fontSize: '28px' }}>
              <ArrowUpIcon size={28} color="#6366f1" /><span>{md.starsPerHour || '5.7'}</span>
            </div>
            <div style={{ color: '#a1a1aa', fontSize: '16px', fontWeight: 600, letterSpacing: '0.05em' }}>
              STARS / HR
            </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '24px', fontSize: '20px', color: '#71717a' }}>
          <span>{md.authors || 'Ran Cheng, Longfei Xu, Zheng Liu, Kaikui Liu, +1 authors'}</span>
          <span>•</span>
          <span>{md.date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>
        
        <p style={{
          fontSize: '24px',
          color: '#52525b',
          lineHeight: 1.6,
          fontFamily: 'Georgia, serif'
        }}>
          {card.description}
        </p>
      </div>
    </div>
  );
};

