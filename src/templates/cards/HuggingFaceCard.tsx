import React from 'react';

function DownloadIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function HeartIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

export const HuggingFaceCard = ({ card }: { card: any }) => {
  const md = card.metadata || {};
  const tags = md.tags || ['SENTENCE-TRANSFORMERS', 'PYTORCH', 'ONNX', 'SAFETENSORS', 'OPENVINO'];
  
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
        background: '#ffd21e', // HF Yellow
        padding: '24px 32px',
        width: '100%',
        borderBottom: '4px solid #000000'
      }}>
        <span style={{ fontSize: '32px', marginRight: '16px' }}>🤗</span>
        <span style={{ color: '#000000', fontWeight: 800, fontSize: '24px', letterSpacing: '0.05em' }}>HUGGING FACE</span>
        <div style={{
          marginLeft: 'auto', background: '#ffffff', color: '#000000', 
          padding: '8px 16px', fontWeight: 700, fontSize: '18px', border: '2px solid #000000'
        }}>
          {md.task || 'SENTENCE SIMILARITY'}
        </div>
      </div>
      
      <div style={{ padding: '48px', display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ 
          fontSize: '40px', 
          fontWeight: 800, 
          color: '#000000', 
          marginBottom: '16px',
        }}>
          {card.title}
        </h1>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#000000', fontWeight: 600, fontSize: '20px', marginBottom: '32px' }}>
          <span style={{ textDecoration: 'underline' }}>@{md.author || 'sentence-transformers'}</span>
        </div>
        
        <p style={{
          fontSize: '24px',
          color: '#52525b',
          lineHeight: 1.5,
          marginBottom: '32px'
        }}>
          {card.description}
        </p>

        <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '2px solid #000000', padding: '8px 16px', fontWeight: 700, fontSize: '20px' }}>
                <DownloadIcon size={24} /> {md.downloads || '21,991,721'} DL
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '2px solid #000000', padding: '8px 16px', fontWeight: 700, fontSize: '20px', color: '#ef4444' }}>
                <HeartIcon size={24} color="#ef4444" /> {md.likes || '1,378'}
            </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '48px' }}>
            {tags.map((tag: string) => (
                <div key={tag} style={{ background: '#ffd21e', border: '2px solid #000000', padding: '8px 16px', fontWeight: 700, fontSize: '18px', color: '#000000' }}>
                    {tag}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

