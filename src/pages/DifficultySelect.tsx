import { useNavigate } from 'react-router-dom';
import { Difficulty } from '../types/game';
import { ZorlukSecimi } from '../screens/ZorlukSecimi';

function getStoredHighScore(): number {
  try {
    return Number(localStorage.getItem('renk-koru-high-score')) || 0;
  } catch {
    return 0;
  }
}

export function DifficultySelect(): JSX.Element {
  const navigate = useNavigate();
  const highScore = getStoredHighScore();

  const handleSelectDifficulty = (difficulty: Difficulty) => {
    navigate(`/game?difficulty=${difficulty}`);
  };

  return (
    <ZorlukSecimi
      onBack={() => navigate('/')}
      onSelectDifficulty={handleSelectDifficulty}
      highScore={highScore}
    />
  );
}
