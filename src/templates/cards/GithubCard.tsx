import React from 'react';

function StarIcon({ size = 24, fill = 'none', color = 'currentColor' }: { size?: number; fill?: string; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function GitForkIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <circle cx="12" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <path d="M6 9v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9" />
      <line x1="12" x2="12" y1="12" y2="15" />
    </svg>
  );
}

function BookIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}>
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function CircleIcon({ size = 24, fill = 'none', color = 'currentColor' }: { size?: number; fill?: string; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth={2} style={{ display: 'flex' }}>
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

export const GithubCard = ({ card }: { card: any }) => {
  const md: any = card.metadata || {};

  const getLanguageColor = (lang: string) => {
    switch (lang?.toLowerCase()) {
      case 'typescript': return '#3178c6';
      case 'javascript': return '#f1e05a';
      case 'python': return '#3572A5';
      case 'go': return '#00ADD8';
      case 'rust': return '#dea584';
      case 'java': return '#b07219';
      case 'c++': return '#f34b7d';
      default: return '#8b949e';
    }
  };

  const [owner, repo] = (card.title || '').split('/');

  return (
    <div 
      style={{
        background: '#0d1117',
        border: '1px solid #30363d',
        borderRadius: '6px',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '48px',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', marginBottom: '32px' }}>
        <div style={{ 
          width: '64px', height: '64px', borderRadius: '32px', background: '#21262d', 
          border: '1px solid #30363d', display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden'
        }}>
          {owner ? (
            <img src={`https://github.com/${owner}.png?size=128`} alt={owner} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <BookIcon size={32} color="#8b949e" />
          )}
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <h2 style={{ fontSize: '36px', fontWeight: 600, margin: 0, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <span style={{ color: '#58a6ff', display: 'flex' }}>
              {owner ? <span style={{ fontWeight: 400, marginRight: '12px' }}>{owner} / </span> : null}
              <span style={{ fontWeight: 600 }}>{repo || card.title}</span>
            </span>
            <span style={{ border: '1px solid #30363d', borderRadius: '24px', color: '#8b949e', fontSize: '18px', padding: '4px 16px', marginLeft: '16px', fontWeight: 500 }}>Public</span>
          </h2>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ color: '#8b949e', fontSize: '28px', lineHeight: 1.5, marginBottom: '32px' }}>
          {card.description}
        </div>

        {md.topics && md.topics.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
            {md.topics.slice(0, 5).map((t: string) => (
              <span key={t} style={{ background: '#1158c733', color: '#58a6ff', padding: '8px 16px', borderRadius: '24px', fontSize: '20px', fontWeight: 500 }}>
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '32px', fontSize: '24px', color: '#8b949e' }}>
          {md.language && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <CircleIcon size={24} fill={getLanguageColor(md.language)} color={getLanguageColor(md.language)} />
              <span>{md.language}</span>
            </div>
          )}
          
          {md.stars !== undefined && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'inherit' }}>
              <StarIcon size={24} /> <span>{md.stars.toLocaleString()}</span>
            </div>
          )}
          
          {md.forks !== undefined && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'inherit' }}>
              <GitForkIcon size={24} /> <span>{md.forks.toLocaleString()}</span>
            </div>
          )}

          {md.starsRecent && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <StarIcon size={24} fill="#e3b341" color="#e3b341" /> <span style={{ color: '#e3b341' }}>{md.starsRecent} today</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
