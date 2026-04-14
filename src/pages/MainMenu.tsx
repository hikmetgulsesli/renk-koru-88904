import { useNavigate } from 'react-router-dom';
import { AnaMenu } from '../screens/AnaMenu';

function getStoredHighScore(): number {
  try {
    return Number(localStorage.getItem('renk-koru-high-score')) || 0;
  } catch {
    return 0;
  }
}

function getStoredCurrentScore(): number {
  try {
    return Number(localStorage.getItem('renk-koru-current-score')) || 0;
  } catch {
    return 0;
  }
}

export function MainMenu(): JSX.Element {
  const navigate = useNavigate();
  const highScore = getStoredHighScore();
  const currentScore = getStoredCurrentScore();

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
