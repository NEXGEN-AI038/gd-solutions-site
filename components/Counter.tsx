export default function Counter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  // Renders the final value immediately — no count-up-from-zero animation.
  // The parent section already fades/slides in via <Reveal>, so this stays
  // reliable (never shows "0" before JS hydrates) while still feeling alive.
  return (
    <span className="font-display text-4xl font-semibold text-paper sm:text-5xl">
      {value}
      <span className="text-signal">{suffix}</span>
    </span>
  );
}
