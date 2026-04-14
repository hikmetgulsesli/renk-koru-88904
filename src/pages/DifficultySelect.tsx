import { useNavigate } from 'react-router-dom';
import { Difficulty } from '../types/game';
import { ZorlukSecimi } from '../screens/ZorlukSecimi';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function DifficultySelect(): JSX.Element {
  const navigate = useNavigate();
  const [highScore] = useLocalStorage<number>('renk-koru-high-score', 0);

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
