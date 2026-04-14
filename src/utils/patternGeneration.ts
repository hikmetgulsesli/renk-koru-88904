import type { Point, Difficulty } from '../types/game';

/**
 * Generate a set of circular dots that form an Ishihara plate.
 * Background dots fill the circle uniformly; target dots trace the hidden digit.
 *
 * The `targetValue` string is the digit (0-9) to embed.
 * Points belonging to the digit have `color` set to `'target'`;
 * background points have `color` set to `'bg'`.
 */

// Simple bitmap font for digits 0–9 (5 wide × 7 tall, 1 = filled)
const DIGIT_BITMAPS: Record<string, number[][]> = {
  '0': [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
  ],
  '1': [
    [0,0,1,0,0],
    [0,1,1,0,0],
    [1,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [1,1,1,1,1],
  ],
  '2': [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [0,0,0,0,1],
    [0,0,1,1,0],
    [0,1,0,0,0],
    [1,0,0,0,0],
    [1,1,1,1,1],
  ],
  '3': [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [0,0,0,0,1],
    [0,0,1,1,0],
    [0,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
  ],
  '4': [
    [0,0,0,1,0],
    [0,0,1,1,0],
    [0,1,0,1,0],
    [1,0,0,1,0],
    [1,1,1,1,1],
    [0,0,0,1,0],
    [0,0,0,1,0],
  ],
  '5': [
    [1,1,1,1,1],
    [1,0,0,0,0],
    [1,1,1,1,0],
    [0,0,0,0,1],
    [0,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
  ],
  '6': [
    [0,1,1,1,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
  ],
  '7': [
    [1,1,1,1,1],
    [0,0,0,0,1],
    [0,0,0,1,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
  ],
  '8': [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0],
  ],
  '9': [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,1],
    [0,0,0,0,1],
    [0,0,0,0,1],
    [0,1,1,1,0],
  ],
};

// Density configs per difficulty
const CONFIGS: Record<Difficulty, { totalDots: number; minR: number; maxR: number }> = {
  easy:   { totalDots: 180, minR: 6, maxR: 14 },
  medium: { totalDots: 280, minR: 5, maxR: 11 },
  hard:   { totalDots: 380, minR: 4, maxR: 9  },
};

function randRange(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

function isInBitmap(
  nx: number,
  ny: number,
  bitmap: number[][],
): boolean {
  const col = Math.floor((nx + 1) * bitmap[0].length / 2);   // map [-1,1] → col
  const row = Math.floor((ny + 1) * bitmap.length / 2);       // map [-1,1] → row
  if (row < 0 || row >= bitmap.length || col < 0 || col >= bitmap[0].length) return false;
  return bitmap[row][col] === 1;
}

export function generatePlatePoints(
  radius: number,
  difficulty: Difficulty,
  targetValue?: string,
): Point[] {
  const cfg = CONFIGS[difficulty];
  const points: Point[] = [];

  const bitmap = targetValue ? (DIGIT_BITMAPS[targetValue] ?? DIGIT_BITMAPS['0']) : null;

  // Digit occupies centre ~55 % of plate radius
  const digitScale = 0.55;

  // Generate dots via rejection sampling
  let attempts = 0;
  const maxAttempts = cfg.totalDots * 6;

  while (points.length < cfg.totalDots && attempts < maxAttempts) {
    attempts++;
    // Uniform random point inside circle
    const angle = Math.random() * Math.PI * 2;
    const r = Math.sqrt(Math.random()) * radius;
    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;

    const r2 = randRange(cfg.minR, cfg.maxR);

    // Normalised coords for digit check
    const nx = x / (radius * digitScale);
    const ny = y / (radius * digitScale);
    const isTarget = bitmap !== null && isInBitmap(nx, ny, bitmap);

    points.push({
      x,
      y,
      color: isTarget ? 'target' : 'bg',
      radius: r2,
    });
  }

  return points;
}
