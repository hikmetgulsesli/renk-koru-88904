import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { SonucEkrani } from '../screens/SonucEkrani';

export function ResultScreen(): JSX.Element {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const scoreParam = searchParams.get('score');

  const score = scoreParam ? parseInt(scoreParam, 10) : 0;
  
  const [highScore, setHighScore] = useLocalStorage<number>('renk-koru-high-score', 0);

  const handleRestart = () => {
    navigate(`/difficulty?restart=true`);
  };

  const handleBackToMenu = () => {
    if (score > highScore) {
      setHighScore(score);
    }
    navigate('/');
  };
  
  return (
    <SonucEkrani
      score={score}
      highScore={highScore}
      onRestart={handleRestart}
      onBackToMenu={handleBackToMenu}
    />
  );
}
