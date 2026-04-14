export interface Point {
  x: number;
  y: number;
  color: string;
  radius: number;
}

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface IshiharaPlateData {
  backgroundColors: string[];
  targetColor: string;
  points: Point[];
  targetValue: string;
  radius: number;
}

export interface Answer {
  questionNumber: number;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  timeSpent: number;
}
