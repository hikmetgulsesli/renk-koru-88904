interface TimeBarProps {
  timeRemaining: number;
  total: number;
}

export function TimeBar({ timeRemaining, total }: TimeBarProps): JSX.Element {
  const percent = total > 0 ? (timeRemaining / total) * 100 : 0;

  return (
    <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
      <div
        className="h-full bg-primary shadow-[0_0_15px_rgba(107,255,143,0.5)] rounded-full transition-all duration-1000 ease-linear"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
