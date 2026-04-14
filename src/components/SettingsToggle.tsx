interface SettingsToggleProps {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  variant?: 'primary' | 'secondary';
}

export function SettingsToggle({
  label,
  description,
  checked,
  onChange,
  variant = 'primary',
}: SettingsToggleProps): JSX.Element {
  const trackColorClass = variant === 'primary'
    ? 'peer-checked:bg-primary'
    : 'peer-checked:bg-secondary';

  return (
    <div className="flex items-center justify-between group">
      <div className="flex flex-col gap-1">
        <span className={`font-bold text-lg group-hover:${variant === 'primary' ? 'text-primary' : 'text-secondary'} transition-colors`}>
          {label}
        </span>
        {description && (
          <span className="text-on-surface-variant text-sm">{description}</span>
        )}
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only peer"
          type="checkbox"
          role="switch"
          aria-checked={checked}
        />
        <div className={`w-14 h-8 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all ${trackColorClass}`}></div>
      </label>
    </div>
  );
}
