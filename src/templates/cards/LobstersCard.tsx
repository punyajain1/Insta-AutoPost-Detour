import React from 'react';

function ClockIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function GlobeIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
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

function MessageCircleIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function ChevronUpIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

export const LobstersCard = ({ card }: { card: any }) => {
  const md = card.metadata || {};
  const tags = md.tags || ['plt'];
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      background: '#ffffff',
      width: '100%',
      fontFamily: 'Inter, sans-serif',
      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
      borderRadius: '24px', // highly rounded like the screenshot
      padding: '48px',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '32px'
      }}>
        <span style={{ color: '#000000', fontWeight: 700, fontSize: '24px' }}>Lobste.rs</span>
        <div style={{
          marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px',
          border: '1px solid #fecaca', padding: '8px 16px', borderRadius: '100px',
          color: '#b91c1c', fontWeight: 600, fontSize: '20px'
        }}>
          <ChevronUpIcon size={24} color="#b91c1c" /> {md.score || '5'}
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: '#71717a', fontSize: '20px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ClockIcon size={20} /><span>{md.timeAgo || '7h ago'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <GlobeIcon size={20} /><span>{md.domain || 'blog.veritates.love'}</span>
            </div>
        </div>
        
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
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
            {tags.map((tag: string) => (
                <div key={tag} style={{ 
                    display: 'flex', alignItems: 'center',
                    border: '1px solid #fecaca', color: '#18181b', 
                    padding: '6px 16px', borderRadius: '100px', 
                    fontSize: '18px', fontWeight: 500 
                }}>
                    <span style={{ color: '#b91c1c', marginRight: '4px' }}>#</span>
                    <span>{tag}</span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

