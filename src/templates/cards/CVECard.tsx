import React from 'react';

function ShieldAlertIcon({ size = 32, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
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

function BoxIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" x2="12" y1="22.08" y2="12" />
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

export const CVECard = ({ card }: { card: any }) => {
  const md = card.metadata || {};
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      background: '#ffffff',
      width: '100%',
      fontFamily: 'Inter, sans-serif',
      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        background: '#ff0000', // Red
        padding: '24px 32px',
        width: '100%',
        borderBottom: '4px solid #000000'
      }}>
        <div style={{ display: 'flex', marginRight: '16px' }}>
          <ShieldAlertIcon size={32} color="#000000" />
        </div>
        <span style={{ color: '#000000', fontWeight: 800, fontSize: '24px', letterSpacing: '0.05em' }}>SECURITY ADVISORY</span>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            <div style={{ background: '#000000', color: '#ff0000', padding: '8px 12px', fontWeight: 800, fontSize: '20px' }}>
                {md.cvss || '9.8'}
            </div>
            <div style={{ background: '#ffffff', color: '#000000', padding: '8px 16px', fontWeight: 800, fontSize: '20px', border: '2px solid #000000', borderLeft: 'none' }}>
                {md.severity || 'CRITICAL'}
            </div>
        </div>
      </div>
      
      <div style={{ padding: '48px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
            <div style={{ background: '#ffcdd2', border: '2px solid #000000', padding: '8px 16px', fontWeight: 800, fontSize: '20px', color: '#000000' }}>
                {card.title || 'CVE-2026-91100'}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#000000', fontWeight: 700, fontSize: '20px' }}>
                <CalendarIcon size={24} /><span>{md.date || 'Sep 16, 2026'}</span>
            </div>
        </div>
        
        <p style={{
          fontSize: '32px',
          fontWeight: 800,
          color: '#000000',
          lineHeight: 1.4,
          marginBottom: '48px'
        }}>
          {card.description}
        </p>

        <div style={{ color: '#000000', fontWeight: 800, fontSize: '18px', letterSpacing: '0.1em', marginBottom: '16px' }}>
            AFFECTED PRODUCTS
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '48px' }}>
            {(md.products || ['hp/linux_imaging_and_printing']).map((product: string) => (
                <div key={product} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f4f4f5', border: '2px solid #000000', padding: '12px 16px', fontWeight: 700, fontSize: '20px', color: '#000000' }}>
                    <BoxIcon size={24} /> {product}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

