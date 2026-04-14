// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Oyun Ekranı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useEffect, useCallback, useRef } from "react";
import { IshiharaPlate } from "../components/IshiharaPlate";
import { generateIshiharaColors } from "../utils/colorGeneration";
import { generatePlatePoints } from "../utils/patternGeneration";
import { calculateScore, calculateTimeBonus } from "../utils/scoring";
import type { IshiharaPlateData, Answer, Difficulty } from "../types/game";

interface OyunEkraniProps {
  difficulty?: Difficulty;
  onGameOver?: (score: number) => void;
}

const TOTAL_QUESTIONS = 10;
const TIME_PER_QUESTION = { easy: 30, medium: 20, hard: 15 };

function generatePlate(difficulty: Difficulty): IshiharaPlateData {
  const targetValue = String(Math.floor(Math.random() * 10));
  const colors = generateIshiharaColors(difficulty);
  const points = generatePlatePoints(150, difficulty, targetValue);
  return {
    backgroundColors: colors.background,
    targetColor: colors.target,
    points,
    targetValue,
    radius: 150,
  };
}

export function OyunEkrani({ difficulty = 'easy', onGameOver }: OyunEkraniProps) {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(TIME_PER_QUESTION[difficulty]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [currentPlate, setCurrentPlate] = useState<IshiharaPlateData>(() => generatePlate(difficulty));
  const [answers, setAnswers] = useState<Answer[]>([]);
  const questionStartTime = useRef(Date.now());

  // Ref to avoid timer dependency on handleSubmit
  const handleSubmitRef = useRef<() => void>(() => {});

  const handleSubmit = useCallback(() => {
    const timeSpent = TIME_PER_QUESTION[difficulty] - timeRemaining;
    const isCorrect = userAnswer === currentPlate.targetValue;
    const timeBonus = calculateTimeBonus(timeRemaining);
    const earnedPoints = isCorrect ? 100 + timeBonus : 0;

    const newAnswer: Answer = {
      questionNumber: currentQuestion,
      userAnswer,
      correctAnswer: currentPlate.targetValue,
      isCorrect,
      timeSpent,
    };

    setAnswers((prev) => [...prev, newAnswer]);
    setScore((prev) => prev + earnedPoints);
    setTimeout(() => {
      if (currentQuestion >= TOTAL_QUESTIONS) {
        setIsGameOver(true);
        if (onGameOver) {
          onGameOver(calculateScore([...answers, newAnswer]));
        }
      } else {
        setCurrentQuestion((prev) => prev + 1);
        setUserAnswer('');
        setTimeRemaining(TIME_PER_QUESTION[difficulty]);
        setCurrentPlate(generatePlate(difficulty));
        questionStartTime.current = Date.now();
      }
    }, 600);
  }, [userAnswer, currentQuestion, timeRemaining, onGameOver, difficulty, currentPlate, answers]);

  // Keep ref in sync with latest handleSubmit
  useEffect(() => {
    handleSubmitRef.current = handleSubmit;
  }, [handleSubmit]);

  useEffect(() => {
    if (isGameOver) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleSubmitRef.current();
          return TIME_PER_QUESTION[difficulty];
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion, isGameOver, difficulty]);

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      setUserAnswer((prev) => prev.slice(0, -1));
    } else if (key === 'enter') {
      handleSubmit();
    } else {
      setUserAnswer((prev) => prev + key);
    }
  };

  const handleSkip = () => {
    const timeSpent = TIME_PER_QUESTION[difficulty] - timeRemaining;
    const newAnswer: Answer = {
      questionNumber: currentQuestion,
      userAnswer: '',
      correctAnswer: currentPlate.targetValue,
      isCorrect: false,
      timeSpent,
    };
    setAnswers((prev) => [...prev, newAnswer]);
    if (currentQuestion >= TOTAL_QUESTIONS) {
      setIsGameOver(true);
      if (onGameOver) onGameOver(score);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setUserAnswer('');
      setTimeRemaining(TIME_PER_QUESTION[difficulty]);
      setCurrentPlate(generatePlate(difficulty));
      questionStartTime.current = Date.now();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const timePercent = (timeRemaining / TIME_PER_QUESTION[difficulty]) * 100;

  return (
    <>
      {/*  TopAppBar  */}
      <header className="fixed top-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-xl transition-all">
      <div className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
      <div className="text-xl font-bold tracking-tighter text-[#6bff8f] font-manrope">Luminous Precision</div>
      <div className="hidden md:flex items-center gap-6">
      <span className="text-[#6bff8f] font-bold border-b-2 border-[#6bff8f] font-manrope tracking-tight py-1">Test</span>
      <span className="text-neutral-400 font-medium font-manrope tracking-tight hover:text-[#6bff8f] transition-colors cursor-pointer">Geçmiş</span>
      <span className="text-neutral-400 font-medium font-manrope tracking-tight hover:text-[#6bff8f] transition-colors cursor-pointer">İçgörüler</span>
      </div>
      <div className="flex items-center gap-4">
      <span className="bg-[#6bff8f]/10 text-[#6bff8f] px-3 py-1 rounded-full text-xs font-bold font-manrope">Skor: {score}</span>
      <div className="flex gap-2">
      <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors" aria-label="Ayarlar">settings</span>
      <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors" aria-label="Hesap">account_circle</span>
      </div>
      </div>
      </div>
      </header>
      <main className="pt-24 pb-24 min-h-screen flex flex-col items-center justify-center px-4 md:px-8 max-w-7xl mx-auto">
      {/*  Header Info & Timer Section  */}
      <div className="w-full max-w-2xl mb-8 flex flex-col gap-6">
      <div className="flex justify-between items-end">
      <div className="flex flex-col">
      <span className="text-on-surface-variant text-xs uppercase tracking-[0.2em] font-bold mb-1">Mevcut İlerleme</span>
      <h1 className="text-4xl font-black font-headline tracking-tighter">Soru: {currentQuestion}/{TOTAL_QUESTIONS}</h1>
      </div>
      <div className="flex flex-col items-end">
      <span className="text-primary text-xs uppercase tracking-[0.2em] font-bold mb-1">Kalan Süre</span>
      <div className="text-2xl font-mono font-bold text-on-surface">{formatTime(timeRemaining)}</div>
      </div>
      </div>
      {/*  Custom Progress Bar (Timer)  */}
      <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
      <div 
        className="h-full bg-primary shadow-[0_0_15px_rgba(107,255,143,0.5)] rounded-full transition-all duration-1000 ease-linear"
        style={{ width: `${timePercent}%` }}
      ></div>
      </div>
      </div>
      {/*  Main Content Area: Bento-inspired Asymmetric Layout  */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/*  Left: Skip and Context (Desktop only)  */}
      <div className="hidden lg:flex lg:col-span-3 flex-col gap-4 order-2 lg:order-1">
      <div className="glass-panel p-6 rounded-[2rem] flex flex-col gap-4">
      <p className="text-on-surface-variant text-sm leading-relaxed font-medium">
                              Bu plakadaki sayıyı göremiyorsanız 'Atla' düğmesine basın veya tahminde bulunun.
                          </p>
      <button 
        className="w-full py-4 px-6 rounded-xl bg-surface-container-highest text-on-surface font-bold hover:bg-surface-bright transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
        onClick={handleSkip}
      >
      <span>Atla</span>
      <span className="material-symbols-outlined text-sm" data-icon="fast_forward">fast_forward</span>
      </button>
      </div>
      </div>
      {/*  Center: Ishihara Plate  */}
      <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
      <div className="relative group">
      {/*  Decorative backglow  */}
      <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-700"></div>
      {/*  The Plate  */}
      <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-surface-container overflow-hidden ishihara-shadow bg-surface-container-lowest">
      <IshiharaPlate data={currentPlate} />
      </div>
      {/*  Input Overlay for Focus  */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-panel px-8 py-3 rounded-2xl flex flex-col items-center shadow-2xl">
      <span className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">Giriş Yapın</span>
      <div className="text-3xl font-black font-headline tracking-widest text-on-surface">{userAnswer || '--'}</div>
      </div>
      </div>
      </div>
      {/*  Right: Numeric Keypad Section  */}
      <div className="lg:col-span-3 flex flex-col gap-4 order-3">
      <div className="glass-panel p-4 md:p-6 rounded-[2.5rem] shadow-2xl">
      <div className="grid grid-cols-3 gap-3">
      {/*  Keypad Buttons  */}
      {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
        <button 
          key={num}
          className="aspect-square flex items-center justify-center rounded-2xl bg-surface-container-high hover:bg-primary/20 hover:text-primary text-xl font-bold transition-all active:scale-90 duration-150 cursor-pointer"
          onClick={() => handleKeyPress(num)}
        >
        {num}
        </button>
      ))}
      <button 
        className="aspect-square flex items-center justify-center rounded-2xl bg-surface-container-high hover:bg-tertiary/20 hover:text-tertiary transition-all active:scale-90 duration-150 cursor-pointer"
        onClick={() => handleKeyPress('backspace')}
        aria-label="Sil"
      >
      <span className="material-symbols-outlined" data-icon="backspace">backspace</span>
      </button>
      <button 
        className="aspect-square flex items-center justify-center rounded-2xl bg-surface-container-high hover:bg-primary/20 hover:text-primary text-xl font-bold transition-all active:scale-90 duration-150 cursor-pointer"
        onClick={() => handleKeyPress('0')}
      >
      0
      </button>
      <button 
        className="aspect-square flex items-center justify-center rounded-2xl bg-primary text-on-primary-container shadow-[0_0_20px_rgba(107,255,143,0.3)] transition-all active:scale-90 duration-150 cursor-pointer"
        onClick={handleSubmit}
        aria-label="Gönder"
      >
      <span className="material-symbols-outlined font-bold" data-icon="keyboard_return">keyboard_return</span>
      </button>
      </div>
      </div>
      {/*  Mobile Skip Button  */}
      <button 
        className="lg:hidden w-full py-4 px-6 rounded-2xl bg-surface-container-highest text-on-surface font-bold flex items-center justify-center gap-2 cursor-pointer"
        onClick={handleSkip}
      >
      <span>Atla</span>
      <span className="material-symbols-outlined text-sm" data-icon="fast_forward">fast_forward</span>
      </button>
      </div>
      </div>
      </main>
      {/*  BottomNavBar (Mobile only)  */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-safe bg-[#0e0e0e]/90 backdrop-blur-2xl rounded-t-3xl border-t border-white/5 z-50">
      <div className="flex flex-col items-center justify-center text-[#6bff8f] bg-[#6bff8f]/10 rounded-2xl p-2 scale-110">
      <span className="material-symbols-outlined" data-icon="palette">palette</span>
      <span className="font-inter text-[10px] uppercase tracking-widest font-bold mt-1">Test</span>
      </div>
      <div className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:text-white transition-all cursor-pointer">
      <span className="material-symbols-outlined" data-icon="analytics">analytics</span>
      <span className="font-inter text-[10px] uppercase tracking-widest font-bold mt-1">İstatistik</span>
      </div>
      <div className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:text-white transition-all cursor-pointer">
      <span className="material-symbols-outlined" data-icon="school">school</span>
      <span className="font-inter text-[10px] uppercase tracking-widest font-bold mt-1">Akademi</span>
      </div>
      <div className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:text-white transition-all cursor-pointer">
      <span className="material-symbols-outlined" data-icon="tune">tune</span>
      <span className="font-inter text-[10px] uppercase tracking-widest font-bold mt-1">Ayarlar</span>
      </div>
      </nav>
      {/*  Decorative Screen Elements  */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
      <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full"></div>
      <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-secondary/5 blur-[120px] rounded-full"></div>
      </div>
    </>
  );
}
