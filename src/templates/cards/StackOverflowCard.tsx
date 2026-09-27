import React from 'react';

function LayersIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function CheckIcon({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export const StackOverflowCard = ({ card }: { card: any }) => {
  const md = card.metadata || {};
  const tags = md.tags || ['c++', 'floating-point'];
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      background: '#2d2d2d',
      width: '100%',
      fontFamily: 'Inter, sans-serif',
      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
      borderRadius: '12px',
      padding: '32px'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <div style={{ display: 'flex', marginRight: '12px' }}>
          <LayersIcon size={24} color="#f48024" />
        </div>
        <span style={{ color: '#d4d4d8', fontSize: '20px', fontWeight: 500 }}>Stack Overflow</span>
      </div>
      
      <div style={{ width: '100%', height: '1px', background: '#404040', marginBottom: '32px' }}></div>
      
      <div style={{ display: 'flex', gap: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px', minWidth: '120px' }}>
            <div style={{ color: '#d4d4d8', fontSize: '20px' }}>
                <span style={{ fontWeight: 700 }}>{md.votes || '11'}</span> votes
            </div>
            <div style={{ 
                display: 'flex', alignItems: 'center', gap: '8px', 
                background: '#2e7d32', color: '#ffffff', 
                padding: '8px 12px', borderRadius: '4px',
                fontSize: '18px', fontWeight: 600
            }}>
                <CheckIcon size={20} /><span>{md.answers || '2'} answers</span>
            </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <h1 style={{ 
                fontSize: '32px', 
                fontWeight: 600, 
                color: '#3b82f6', // Stack overflow link blue
                lineHeight: 1.4,
                marginBottom: '24px',
            }}>
                {card.title}
            </h1>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {tags.map((tag: string) => (
                    <div key={tag} style={{ background: '#3e4a52', color: '#9bbad2', padding: '6px 12px', borderRadius: '4px', fontSize: '16px', fontWeight: 500 }}>
                        {tag}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

