import { TimeBar } from './TimeBar';

interface GameHeaderProps {
  score: number;
  current: number;
  total: number;
  timeRemaining: number;
}

export function GameHeader({ score, current, total, timeRemaining }: GameHeaderProps): JSX.Element {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const totalTime = total > 0 ? (current <= total ? 30 : 0) : 0;

  return (
    <div className="w-full max-w-2xl mb-8 flex flex-col gap-6">
      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <span className="text-on-surface-variant text-xs uppercase tracking-[0.2em] font-bold mb-1">
            Mevcut İlerleme
          </span>
          <h1 className="text-4xl font-black font-headline tracking-tighter">
            Soru: {current}/{total}
          </h1>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-primary text-xs uppercase tracking-[0.2em] font-bold mb-1">
            Kalan Süre
          </span>
          <div className="text-2xl font-mono font-bold text-on-surface">
            {formatTime(timeRemaining)}
          </div>
        </div>
      </div>
      <TimeBar timeRemaining={timeRemaining} total={totalTime > 0 ? totalTime : 30} />
    </div>
  );
}
