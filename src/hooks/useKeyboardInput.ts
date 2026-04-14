import { useEffect } from 'react';

export function useKeyboardInput(
  onDigit: (d: string) => void,
  onDelete: () => void,
  onSubmit: () => void,
  onSkip: () => void
): void {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '9') {
        e.preventDefault();
        onDigit(e.key);
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        onDelete();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        onSubmit();
      } else if (e.key === 'Escape' || e.key === 's' || e.key === 'S') {
        e.preventDefault();
        onSkip();
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onDigit, onDelete, onSubmit, onSkip]);
}
