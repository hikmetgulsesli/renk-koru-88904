import { useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Difficulty } from '../types/game';
import { OyunEkrani } from '../screens/OyunEkrani';

export function GameScreen(): JSX.Element {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const difficultyParam = searchParams.get('difficulty') as Difficulty | null;
  const difficulty: Difficulty = difficultyParam && ['easy', 'medium', 'hard'].includes(difficultyParam)
    ? difficultyParam
    : 'easy';

  const handleGameOver = useCallback(
    (score: number) => {
      navigate(`/result?score=${score}&difficulty=${difficulty}`);
    },
    [navigate, difficulty]
  );

  return (
    <OyunEkrani
      difficulty={difficulty}
      onGameOver={handleGameOver}
    />
  );
}
