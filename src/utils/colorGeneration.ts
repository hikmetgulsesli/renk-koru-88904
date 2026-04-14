import type { Difficulty } from '../types/game';

/**
 * Ishihara-style color palettes.
 * Background colors form the "noise" dots; target colors form the hidden digit.
 * Easy  → very distinct hue families (green bg / red-orange target)
 * Medium → closer hue families
 * Hard  → very similar hues requiring fine color discrimination
 */

interface GeneratedPlateColors {
  background: string[];
  target: string;
}

const PALETTES: Record<Difficulty, { bg: string[]; targets: string[] }> = {
  easy: {
    bg: [
      '#2d6a2e', '#3b8c3e', '#4fae52', '#5cc462', '#6ed874',
      '#357a36', '#4a9e4c', '#3f9040', '#58b85a', '#48a44a',
    ],
    targets: ['#e8453a', '#d63b30', '#f04e42', '#c43328', '#e04035'],
  },
  medium: {
    bg: [
      '#3a7a3c', '#4e8e50', '#5a9a5c', '#6aac6c', '#78b87a',
      '#448a46', '#5c9e5e', '#68a86a', '#509452', '#62a664',
    ],
    targets: ['#d4785a', '#c86e4e', '#de8262', '#b8664a', '#cc7454'],
  },
  hard: {
    bg: [
      '#6a9a6c', '#78a87a', '#84b486', '#90c092', '#5c8e5e',
      '#72a274', '#80ae82', '#68966a', '#94c496', '#5e9058',
    ],
    targets: ['#9a7a8a', '#8e6e80', '#a68494', '#866a7c', '#9c7c8c'],
  },
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function generateIshiharaColors(difficulty: Difficulty): GeneratedPlateColors {
  const palette = PALETTES[difficulty];
  const background = shuffle(palette.bg).slice(0, 6);
  const target = palette.targets[Math.floor(Math.random() * palette.targets.length)];
  return { background, target };
}
