import React from 'react';

// ---- inlined icons (Lucide shapes, drawn as raw SVG for Satori) ----------

function SparklesIcon({ size = 14, color = '#8A2BE2' }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'flex' }}
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </svg>
  );
}

function CalendarIcon({ size = 14, color = '#9ca3af' }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'flex' }}
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

// ---- helpers --------------------------------------------------------------

/** Manual stand-in for -webkit-line-clamp: 4 (roughly 4 lines at 1rem/600px width). */
function truncateDescription(text: string, maxChars = 220): string {
  if (text.length <= maxChars) return text;
  return text.slice(0, maxChars).replace(/\s+\S*$/, '') + '…';
}

function formatDate(publishedAt?: string): string {
  if (!publishedAt) return 'Recent';
  try {
    return new Date(publishedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return 'Recent';
  }
}

// ---- main template ---------------------------------------------------------

export const AINewsCard = ({ card }: { card: any }) => {
  const md = card.metadata || {};
  const sourceLabel = md.source || md.authorOrCompany || md.channelName || 'Two Minute Papers';
  const description = truncateDescription(card.description || '');

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #e0e0e0',
        borderRadius: 24,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        padding: 48,
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
      }}
    >
      {/* eyebrow row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: '#9333ea',
            fontWeight: 700,
            fontSize: 20,
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}
        >
          <SparklesIcon size={24} color="#9333ea" />
          <span>AI News</span>
        </div>
        <div
          style={{
            display: 'flex',
            width: 6,
            height: 6,
            borderRadius: 3,
            background: '#d4d4d8',
          }}
        />
        <div style={{ display: 'flex', color: '#71717a', fontSize: 20, fontWeight: 500 }}>
          {sourceLabel}
        </div>
      </div>

      {/* title */}
      <div
        style={{
          display: 'flex',
          fontSize: 48,
          fontWeight: 800,
          color: '#18181b',
          marginBottom: 32,
          lineHeight: 1.1,
        }}
      >
        {card.title}
      </div>

      {/* image */}
      {card.imageUrl ? (
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: 400,
            marginBottom: 32,
            borderRadius: 16,
            overflow: 'hidden',
            background: '#000'
          }}
        >
          <img
            src={card.imageUrl}
            alt={card.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      ) : (
        <div style={{ 
          width: '100%', 
          height: 400, 
          borderRadius: 16, 
          marginBottom: 32,
          display: 'flex',
          background: '#f4f4f5',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#a1a1aa'
        }}>
          No Image Available
        </div>
      )}

      {/* description */}
      {description && (
        <div
          style={{
            display: 'flex',
            color: '#4b5563',
            fontSize: 24,
            lineHeight: 1.6,
            marginBottom: 32,
          }}
        >
          {description}
        </div>
      )}

      {/* footer / date, pinned to bottom */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          color: '#71717a',
          fontSize: 20,
          marginTop: 'auto',
          gap: 12
        }}
      >
        <div style={{ display: 'flex' }}>
          <CalendarIcon size={24} color="#a1a1aa" />
        </div>
        <div style={{ display: 'flex' }}>{md.date || formatDate(md.publishedAt)}</div>
      </div>
    </div>
  );
};
