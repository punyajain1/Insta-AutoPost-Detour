import React from 'react';

function TrendingUpIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function MessageSquareIcon({ size = 24, color = 'currentColor', fill = 'none' }: { size?: number; color?: string; fill?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function ClockIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function LinkIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function MessageCircleIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
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

export const HackerNewsCard = ({ card, variant = 'default' }: { card: any, variant?: 'default' | 'jobs' | 'show' | 'ask' }) => {
  const md = card.metadata || {};
  
  const getHeaderText = () => {
    switch (variant) {
      case 'jobs': return 'HN JOBS';
      case 'show': return 'SHOW HN';
      case 'ask': return 'ASK HN';
      default: return 'HACKER NEWS';
    }
  };
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      background: '#ffffff',
      borderRadius: '12px',
      width: '100%',
      fontFamily: 'Inter, sans-serif',
      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        background: '#ff6600',
        padding: '24px 32px',
        width: '100%'
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '32px', height: '32px', border: '2px solid white', marginRight: '16px', color: 'white', fontWeight: 'bold'
        }}>
          Y
        </div>
        <span style={{ color: '#000000', fontWeight: 800, fontSize: '24px', letterSpacing: '0.05em' }}>{getHeaderText()}</span>
        <span style={{ color: '#000000', fontWeight: 600, fontSize: '20px', marginLeft: 'auto' }}>No. {md.rank || Math.floor(Math.random() * 10000)}</span>
      </div>
      
      <div style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: 800, 
          color: '#000000', 
          lineHeight: 1.2,
          marginBottom: '24px',
          fontFamily: 'Georgia, serif'
        }}>
          {card.title}
        </h1>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
          {variant !== 'jobs' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ea580c', fontWeight: 700, fontSize: '24px' }}>
              <TrendingUpIcon size={24} color="#ea580c" />
              <span>{md.score || 0}</span>
            </div>
          )}
          {variant !== 'jobs' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#52525b', fontSize: '24px' }}>
              <MessageSquareIcon size={24} color="#f4f4f5" fill="#f4f4f5" /> 
              <span style={{ color: '#a1a1aa' }}>{md.comments || 0}</span>
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#52525b', fontSize: '24px' }}>
            <ClockIcon size={24} color="#52525b" />
            <span>{md.timeAgo || '3h'}</span>
          </div>
          {variant === 'default' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#18181b', fontWeight: 600, fontSize: '20px', background: '#f4f4f5', padding: '4px 12px', borderRadius: '4px' }}>
              <LinkIcon size={20} />
              <span>{md.domain || 'ycombinator.com'}</span>
            </div>
          )}
        </div>
        
        <div style={{ width: '100%', height: '2px', borderTop: '2px dashed #e4e4e7', marginBottom: '32px' }}></div>
        
        {(variant === 'show' || variant === 'ask') && card.description && (
          <p style={{
            fontSize: '24px',
            color: '#52525b',
            lineHeight: 1.5,
            marginBottom: '32px',
            fontFamily: 'Georgia, serif'
          }}>
            {card.description}
          </p>
        )}
      </div>
    </div>
  );
};

