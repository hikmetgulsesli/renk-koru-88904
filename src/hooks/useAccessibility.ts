import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

export interface AccessibilityState {
  contrastMode: boolean;
  screenReaderEnabled: boolean;
  hintEnabled: boolean;
}

export function useAccessibility(): {
  contrastMode: boolean;
  screenReaderEnabled: boolean;
  hintEnabled: boolean;
  setContrastMode: (v: boolean) => void;
  setScreenReaderEnabled: (v: boolean) => void;
  setHintEnabled: (v: boolean) => void;
} {
  const [storedSettings, setStoredSettings] = useLocalStorage<AccessibilityState>('renk-koru-accessibility', {
    contrastMode: false,
    screenReaderEnabled: false,
    hintEnabled: true,
  });

  const setContrastMode = useCallback((v: boolean) => {
    setStoredSettings((prev) => ({ ...prev, contrastMode: v }));
  }, [setStoredSettings]);

  const setScreenReaderEnabled = useCallback((v: boolean) => {
    setStoredSettings((prev) => ({ ...prev, screenReaderEnabled: v }));
  }, [setStoredSettings]);

  const setHintEnabled = useCallback((v: boolean) => {
    setStoredSettings((prev) => ({ ...prev, hintEnabled: v }));
  }, [setStoredSettings]);

  return {
    contrastMode: storedSettings.contrastMode,
    screenReaderEnabled: storedSettings.screenReaderEnabled,
    hintEnabled: storedSettings.hintEnabled,
    setContrastMode,
    setScreenReaderEnabled,
    setHintEnabled,
  };
}
