type Props = { className?: string };
export function PassifloraLogo({ className = "" }: Props) {
  return <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
    <g className="flower-line" strokeWidth="2.5">
      <circle cx="50" cy="50" r="8" />
      <path d="M50 42C41 21 20 25 34 45M42 50C21 41 25 20 45 34M50 42C59 21 80 25 66 45M58 50C79 41 75 20 55 34M50 58C41 79 20 75 34 55M42 50C21 59 25 80 45 66M50 58C59 79 80 75 66 55M58 50C79 59 75 80 55 66" />
      <path d="M50 58v25c0 7-8 7-8 1 0-5 5-9 8-9" />
    </g>
  </svg>;
}
