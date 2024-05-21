import CircularProgressBar from "./primitives/circularProgressBar";

export default function Rating({ value }: { value: number }) {
  return (
    <div className="absolute -top-[19px] flex items-center justify-center w-[38px] h-[38px] rounded-full text-white bg-tmdb-darkblue select-none">
      <p className="absolute left-[9.75px] top-[7px] font-bold text-sm">
        {value}
        <span className="text-[6px] align-super">%</span>
      </p>
      <CircularProgressBar value={value} />
    </div>
  );
}
