import { useEffect, useRef } from 'react';
import type { IshiharaPlateData } from '../types/game';
import { drawIshiharaPlate } from '../utils/plateRenderer';

interface IshiharaPlateProps {
  data: IshiharaPlateData;
}

export function IshiharaPlate({ data }: IshiharaPlateProps): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Use the parent container size
    const parent = canvas.parentElement;
    if (!parent) return;
    const size = Math.min(parent.clientWidth, parent.clientHeight);
    canvas.width = size;
    canvas.height = size;

    drawIshiharaPlate(canvas, data);
  }, [data]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      aria-label="Ishihara renk koru test plakası"
    />
  );
}
