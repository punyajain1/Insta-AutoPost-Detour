import React from 'react';

function TerminalIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" x2="20" y1="19" y2="19" />
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

export const BlogCard = ({ card }: { card: any }) => {
  const md = card.metadata || {};
  const blogName = md.blogName || 'Engineering';
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      background: '#ffffff',
      borderRadius: '24px',
      padding: '48px',
      width: '100%',
      fontFamily: 'Inter, sans-serif',
      boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
        <TerminalIcon size={24} color="#16a34a" />
        <span style={{ color: '#16a34a', fontWeight: 700, fontSize: '20px', letterSpacing: '0.1em' }}>ENGINEERING BLOG</span>
        <span style={{ color: '#d4d4d8', fontSize: '20px' }}>•</span>
        <span style={{ color: '#71717a', fontSize: '20px', fontWeight: 500 }}>{blogName}</span>
      </div>
      
      <h1 style={{ 
        fontSize: '56px', 
        fontWeight: 800, 
        color: '#18181b', 
        lineHeight: 1.1,
        marginBottom: '24px',
        fontFamily: 'Georgia, serif'
      }}>
        {card.title}
      </h1>
      
      <p style={{
        fontSize: '28px',
        color: '#52525b',
        lineHeight: 1.5,
        marginBottom: '48px',
        fontFamily: 'Georgia, serif'
      }}>
        {card.description}
      </p>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto' }}>
        <CalendarIcon size={24} color="#a1a1aa" />
        <span style={{ color: '#71717a', fontSize: '20px' }}>{md.date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
      </div>
    </div>
  );
};
