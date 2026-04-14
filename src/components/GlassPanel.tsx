import { ReactNode } from 'react';

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
}

export function GlassPanel({ children, className }: GlassPanelProps): JSX.Element {
  return (
    <div
      className={`bg-[rgba(38,38,38,0.6)] backdrop-blur-[20px] border border-white/5 ${className ?? ''}`}
    >
      {children}
    </div>
  );
}
