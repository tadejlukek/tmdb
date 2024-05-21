import { ccc } from "@kozento/utils";
import { ProgressBar } from "react-aria-components";

type Props = {
  value: number;
};

export default function CircularProgressBar({ value }: Props) {
  let center = 16,
    strokeWidth = 1.75,
    r = 16 - strokeWidth,
    c = 2 * r * Math.PI;

  return (
    <ProgressBar
    className={ccc(
      value > 70 ? "text-tmdb-green" : value > 40 ? "text-tmdb-yellow" : "text-tmdb-red",
    )}
      aria-label="Loading…"
      value={value}
    >
      {({ percentage }) => (
        <>
          <svg
            width={36}
            height={36}
            viewBox="0 0 32 32"
            fill="none"
            strokeWidth={strokeWidth}
          >
            <circle
              cx={center}
              cy={center}
              r={r}
              stroke="currentColor"
              strokeOpacity={0.33}
              strokeDasharray={`${c} ${c}`}
              strokeDashoffset={c - (100 / 100) * c}
              strokeLinecap="round"
              transform="rotate(-90 16 16)"
            />
            <circle
              cx={center}
              cy={center}
              r={r}
              stroke="currentColor"
              strokeDasharray={`${c} ${c}`}
              strokeDashoffset={c - (percentage! / 100) * c}
              strokeLinecap="round"
              transform="rotate(-90 16 16)"
            />
          </svg>
        </>
      )}
    </ProgressBar>
  );
}
