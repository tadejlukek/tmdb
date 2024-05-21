import { ccc } from "@kozento/utils";
import { useState } from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  open?: boolean;
};

export default function FilterAccordion({
  title,
  open = true,
  children,
  className,
  ...props
}: Props) {
  const [isOpen, setIsOpen] = useState(open);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div
      className={ccc(
        "border rounded-lg border-tmdb-lightgray shadow-tmdb",
        className
      )}
      {...props}
    >
      <button
        className="flex items-center justify-between px-4 py-2 w-full text-start text-lg font-semibold"
        onClick={toggleAccordion}
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={ccc("w-5 h-5 transform", isOpen && "rotate-90")}
        >
          <path
            fillRule="evenodd"
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <>
          <hr className="border-tmdb-lightgray" />
          <div className="px-4 pt-4 pb-6">{children}</div>
        </>
      )}
    </div>
  );
}
