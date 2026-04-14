interface NumberPadProps {
  onDigit: (d: string) => void;
  onDelete: () => void;
  onSubmit: () => void;
}

export function NumberPad({ onDigit, onDelete, onSubmit }: NumberPadProps): JSX.Element {
  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return (
    <div className="glass-panel p-4 md:p-6 rounded-[2.5rem] shadow-2xl">
      <div className="grid grid-cols-3 gap-3">
        {digits.map((num) => (
          <button
            key={num}
            className="aspect-square flex items-center justify-center rounded-2xl bg-surface-container-high hover:bg-primary/20 hover:text-primary text-xl font-bold transition-all active:scale-90 duration-150 cursor-pointer"
            onClick={() => onDigit(num)}
            aria-label={`Rakam ${num}`}
          >
            {num}
          </button>
        ))}
        <button
          className="aspect-square flex items-center justify-center rounded-2xl bg-surface-container-high hover:bg-tertiary/20 hover:text-tertiary transition-all active:scale-90 duration-150 cursor-pointer"
          onClick={onDelete}
          aria-label="Sil"
        >
          <span className="material-symbols-outlined" data-icon="backspace">
            backspace
          </span>
        </button>
        <button
          className="aspect-square flex items-center justify-center rounded-2xl bg-surface-container-high hover:bg-primary/20 hover:text-primary text-xl font-bold transition-all active:scale-90 duration-150 cursor-pointer"
          onClick={() => onDigit('0')}
          aria-label="Rakam 0"
        >
          0
        </button>
        <button
          className="aspect-square flex items-center justify-center rounded-2xl bg-primary text-on-primary-container shadow-[0_0_20px_rgba(107,255,143,0.3)] transition-all active:scale-90 duration-150 cursor-pointer"
          onClick={onSubmit}
          aria-label="Gönder"
        >
          <span className="material-symbols-outlined font-bold" data-icon="keyboard_return">
            keyboard_return
          </span>
        </button>
      </div>
    </div>
  );
}
