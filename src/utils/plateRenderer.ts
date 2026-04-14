import type { IshiharaPlateData } from '../types/game';

/**
 * Draw an Ishihara-style plate onto an HTML canvas.
 * Background dots use colors from `data.backgroundColors`.
 * Target (digit) dots use `data.targetColor`.
 */
export function drawIshiharaPlate(
  canvas: HTMLCanvasElement,
  data: IshiharaPlateData,
): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const w = canvas.width;
  const h = canvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const plateRadius = Math.max(1, Math.min(w, h) / 2 - 2);

  // Clear
  ctx.clearRect(0, 0, w, h);

  // Dark circular background
  ctx.beginPath();
  ctx.arc(cx, cy, plateRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#131313';
  ctx.fill();

  const bgColors = data.backgroundColors;
  const targetColor = data.targetColor;

  // Draw every dot
  for (const pt of data.points) {
    const sx = cx + pt.x;
    const sy = cy + pt.y;
    const color = pt.color === 'target' ? targetColor : bgColors[Math.floor(Math.abs(pt.x * 7 + pt.y * 13)) % bgColors.length];

    ctx.beginPath();
    ctx.arc(sx, sy, Math.max(1, pt.radius), 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }
}
