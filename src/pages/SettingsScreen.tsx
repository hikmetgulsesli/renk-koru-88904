import { useLocalStorage } from '../hooks/useLocalStorage';
import { Ayarlar, Settings } from '../screens/Ayarlar';

export interface AccessibilitySettings {
  highContrast: boolean;
  screenReader: boolean;
  soundEffects: boolean;
}

export function SettingsScreen(): JSX.Element {
  const [, setSettings] = useLocalStorage<AccessibilitySettings>('renk-koru-settings', {
    highContrast: false,
    screenReader: false,
    soundEffects: true,
  });

  const handleSettingsChange = (newSettings: Settings) => {
    setSettings(newSettings);
  };

  return (
    <Ayarlar
      onSettingsChange={handleSettingsChange}
    />
  );
}
