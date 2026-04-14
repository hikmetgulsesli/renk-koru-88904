export type Difficulty = 'easy' | 'medium' | 'hard';

export interface GameConfig {
  difficulty: Difficulty;
  plateCount: number;
  timePerPlate: number;
}

export const DIFFICULTY_CONFIG: Record<Difficulty, GameConfig> = {
  easy: {
    difficulty: 'easy',
    plateCount: 10,
    timePerPlate: 30,
  },
  medium: {
    difficulty: 'medium',
    plateCount: 10,
    timePerPlate: 20,
  },
  hard: {
    difficulty: 'hard',
    plateCount: 10,
    timePerPlate: 15,
  },
};
