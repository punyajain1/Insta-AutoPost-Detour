import React from 'react';
import { GithubCard } from './GithubCard';
import { BlogCard } from './BlogCard';
import { HackerNewsCard } from './HackerNewsCard';
import { AINewsCard } from './AINewsCard';
import { ArxivCard } from './ArxivCard';
import { PapersWithCodeCard } from './PapersWithCodeCard';
import { HuggingFaceCard } from './HuggingFaceCard';
import { CVECard } from './CVECard';
import { StackOverflowCard } from './StackOverflowCard';
import { LobstersCard } from './LobstersCard';
import { SpaceNewsCard } from './SpaceNewsCard';
import { MarsRoverCard } from './MarsRoverCard';
import { DatabaseBlogCard } from './DatabaseBlogCard';

// ---- Inline SVG pill icons (replacing lucide-react) -----------------------
function SlidersHorizontalIcon({ size = 24, color = '#a1a1aa' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}><line x1="21" x2="14" y1="4" y2="4" /><line x1="10" x2="3" y1="4" y2="4" /><line x1="21" x2="12" y1="12" y2="12" /><line x1="8" x2="3" y1="12" y2="12" /><line x1="21" x2="16" y1="20" y2="20" /><line x1="12" x2="3" y1="20" y2="20" /><line x1="14" x2="14" y1="2" y2="6" /><line x1="8" x2="8" y1="10" y2="14" /><line x1="16" x2="16" y1="18" y2="22" /></svg>;
}
function HashIcon({ size = 24, color = '#a1a1aa' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}><line x1="4" x2="20" y1="9" y2="9" /><line x1="4" x2="20" y1="15" y2="15" /><line x1="10" x2="8" y1="3" y2="21" /><line x1="16" x2="14" y1="3" y2="21" /></svg>;
}
function SparklesIcon({ size = 24, color = '#a1a1aa' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /><path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" /></svg>;
}
function FileTextIcon({ size = 24, color = '#a1a1aa' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>;
}
function Code2Icon({ size = 24, color = '#a1a1aa' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>;
}
function SmileIcon({ size = 24, color = '#a1a1aa' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}><circle cx="12" cy="12" r="10" /><path d="M8 13s1.5 2 4 2 4-2 4-2" /><line x1="9" x2="9.01" y1="9" y2="9" /><line x1="15" x2="15.01" y1="9" y2="9" /></svg>;
}
function ShieldAlertIcon({ size = 24, color = '#a1a1aa' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>;
}
function LayersIcon({ size = 24, color = '#a1a1aa' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>;
}
function DatabaseIcon({ size = 24, color = '#a1a1aa' }: { size?: number; color?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ display: 'flex' }}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>;
}

export const FeedCardComponent = ({ card }: { card: any }) => {
  const renderSpecificCard = () => {
    switch (card.type) {
      case 'github': return <GithubCard card={card} />;
      case 'blog': return <BlogCard card={card} />;
      case 'hackernews': return <HackerNewsCard card={card} />;
      case 'hn_jobs': return <HackerNewsCard card={card} variant="jobs" />;
      case 'show_hn': return <HackerNewsCard card={card} variant="show" />;
      case 'ask_hn': return <HackerNewsCard card={card} variant="ask" />;
      case 'ai_news': return <AINewsCard card={card} />;
      case 'arxiv': return <ArxivCard card={card} />;
      case 'papers_with_code': return <PapersWithCodeCard card={card} />;
      case 'huggingface': return <HuggingFaceCard card={card} />;
      case 'cve': return <CVECard card={card} />;
      case 'stackoverflow': return <StackOverflowCard card={card} />;
      case 'lobsters': return <LobstersCard card={card} />;
      case 'space_news': return <SpaceNewsCard card={card} />;
      case 'mars_rover': return <MarsRoverCard card={card} />;
      case 'database_blog': return <DatabaseBlogCard card={card} />;
      default: return <BlogCard card={{...card, type: 'blog', metadata: { blogName: card.type }}} />;
    }
  };

  const getPillInfo = () => {
    switch (card.type) {
      case 'hackernews': return { icon: <HashIcon size={24} color="#a1a1aa" />, text: 'HackerNews' };
      case 'hn_jobs': return { icon: <HashIcon size={24} color="#a1a1aa" />, text: 'HN Jobs' };
      case 'show_hn': return { icon: <HashIcon size={24} color="#a1a1aa" />, text: 'Show HN' };
      case 'ask_hn': return { icon: <HashIcon size={24} color="#a1a1aa" />, text: 'Ask HN' };
      case 'ai_news': return { icon: <SparklesIcon size={24} color="#a1a1aa" />, text: 'AI News' };
      case 'arxiv': return { icon: <FileTextIcon size={24} color="#a1a1aa" />, text: 'Research Papers' };
      case 'papers_with_code': return { icon: <Code2Icon size={24} color="#a1a1aa" />, text: 'Papers w/ Code' };
      case 'huggingface': return { icon: <SmileIcon size={24} color="#a1a1aa" />, text: 'HuggingFace' };
      case 'cve': return { icon: <ShieldAlertIcon size={24} color="#a1a1aa" />, text: 'CVEs' };
      case 'stackoverflow': return { icon: <LayersIcon size={24} color="#a1a1aa" />, text: 'Stack Overflow' };
      case 'lobsters': return { icon: <SlidersHorizontalIcon size={24} color="#a1a1aa" />, text: 'Lobste.rs' };
      case 'space_news': return { icon: <SlidersHorizontalIcon size={24} color="#a1a1aa" />, text: 'Space News' };
      case 'mars_rover': return { icon: <SlidersHorizontalIcon size={24} color="#a1a1aa" />, text: 'Mars' };
      case 'database_blog': return { icon: <DatabaseIcon size={24} color="#a1a1aa" />, text: 'System Design' };
      default: return { icon: <SlidersHorizontalIcon size={24} color="#a1a1aa" />, text: 'All' };
    }
  };

  const pill = getPillInfo();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '1920px',
        height: '1080px',
        background: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Inter, sans-serif',
        position: 'relative'
      }}
    >
      {/* Centered Card Container */}
      <div style={{ display: 'flex', width: '1400px', height: 'auto', minHeight: '400px' }}>
        {renderSpecificCard()}
      </div>

      {/* Bottom Pill */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        background: '#18181b', // zinc-900
        padding: '16px 32px',
        borderRadius: '100px',
        border: '1px solid #27272a', // zinc-800
      }}>
        {pill.icon}
        <span style={{ color: '#ffffff', fontSize: '24px', fontWeight: 600 }}>{pill.text}</span>
        {card.type !== 'blog' && card.type !== 'github' && <span style={{ color: '#a1a1aa', fontSize: '24px', marginLeft: '4px' }}>•</span>}
      </div>
    </div>
  );
};
