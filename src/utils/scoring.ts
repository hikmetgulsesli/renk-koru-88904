import type { Answer } from '../types/game';

const BASE_POINTS = 100;
const TIME_BONUS_MULTIPLIER = 10;
const MAX_TIME_BONUS = 300;
const STREAK_BONUS_THRESHOLD = 3;
const STREAK_BONUS_POINTS = 50;

export function calculateScore(answers: Answer[]): number {
  let total = 0;
  let streak = 0;

  for (const a of answers) {
    if (a.isCorrect) {
      total += BASE_POINTS;
      const tb = Math.min(a.timeSpent * TIME_BONUS_MULTIPLIER, MAX_TIME_BONUS);
      total += tb;
      streak++;
      if (streak >= STREAK_BONUS_THRESHOLD) {
        total += STREAK_BONUS_POINTS;
      }
    } else {
      streak = 0;
    }
  }

  return total;
}

export function getMaxScore(): number {
  // 10 questions, max time bonus each + all streak bonuses
  return BASE_POINTS * 10 + MAX_TIME_BONUS * 10 + STREAK_BONUS_POINTS * 8;
}

export function getBonusPoints(): number {
  return STREAK_BONUS_POINTS;
}

export function calculateTimeBonus(timeRemaining: number): number {
  return Math.min(timeRemaining * TIME_BONUS_MULTIPLIER, MAX_TIME_BONUS);
}
