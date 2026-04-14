import { useState, useEffect, useCallback, useRef } from 'react';

export function useTimer(
  seconds: number,
  onTick: (n: number) => void,
  onExpire: () => void
): { timeLeft: number; pause: () => void; resume: () => void; reset: () => void } {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const pausedRef = useRef(false);
  const onExpireRef = useRef(onExpire);
  const onTickRef = useRef(onTick);

  onExpireRef.current = onExpire;
  onTickRef.current = onTick;

  useEffect(() => {
    setTimeLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    if (pausedRef.current) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (pausedRef.current) return prev;
        const next = prev - 1;
        if (next <= 0) {
          clearInterval(interval);
          onTickRef.current(0);
          onExpireRef.current();
          return 0;
        }
        onTickRef.current(next);
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const pause = useCallback(() => {
    pausedRef.current = true;
  }, []);

  const resume = useCallback(() => {
    pausedRef.current = false;
  }, []);

  const reset = useCallback(() => {
    setTimeLeft(seconds);
    pausedRef.current = false;
  }, [seconds]);

  return { timeLeft, pause, resume, reset };
}
