import { useNavigate } from 'react-router-dom';
import { AnaMenu } from '../screens/AnaMenu';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function MainMenu(): JSX.Element {
  const navigate = useNavigate();
  const [highScore] = useLocalStorage<number>('renk-koru-high-score', 0);
  const [currentScore] = useLocalStorage<number>('renk-koru-current-score', 0);

  return (
    <AnaMenu
      onStart={() => navigate('/difficulty')}
      onAyarlar={() => navigate('/settings')}
      onBilgi={() => navigate('/about')}
      highScore={highScore}
      currentScore={currentScore}
    />
  );
}
