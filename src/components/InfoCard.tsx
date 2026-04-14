interface InfoCardProps {
  title: string;
  description: string;
  icon?: string;
  iconFill?: boolean;
}

export function InfoCard({
  title,
  description,
  icon,
  iconFill = false,
}: InfoCardProps): JSX.Element {
  return (
    <div className="bg-primary/5 rounded-[2rem] p-8 border border-primary/10 flex flex-col gap-4">
      {icon && (
        <span
          className="material-symbols-outlined text-primary text-4xl"
          style={{ fontVariationSettings: iconFill ? "'FILL' 1" : "'FILL' 0" }}
        >
          {icon}
        </span>
      )}
      <h4 className="text-xl font-bold font-headline leading-tight">{title}</h4>
      <p className="text-on-surface-variant text-sm leading-relaxed">{description}</p>
    </div>
  );
}
