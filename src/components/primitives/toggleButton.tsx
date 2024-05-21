import { forwardRef } from "react";

import { ToggleButton as RAToggleButton, ToggleButtonProps } from "react-aria-components";
import { ccc } from "@kozento/utils";

type Props = ToggleButtonProps & {
  size?: "small" | "medium" | "large";
  rounding?: "none" | "small" | "medium" | "large";
  fill?: boolean;
  className?: string;
};

const ToggleButton = forwardRef<HTMLButtonElement, Props>(
  ({ size = "large", rounding = "medium", isSelected, className, ...props }, ref) => {
    return (
      <RAToggleButton
        ref={ref}
        className={ccc(
          "border font-normal outline-none",
          
          isSelected && "text-white border-transparent bg-tmdb-lightblue",
          !isSelected && "text-black border-tmdb-gray hover:text-white hover:border-transparent hover:bg-tmdb-lightblue",

          size === "small" && "px-3 py-1 text-sm",
          size === "medium" && "text-lg",
          size === "large" && "px-4 py-2 text-2xl",

          rounding === "none" && "rounded-none",
          rounding === "small" && "rounded",
          rounding === "medium" && "rounded-lg",
          rounding === "large" && "rounded-2xl",

          className
        )}
        {...props}
      />
    );
  }
);

ToggleButton.displayName = "ToggleButton";

export default ToggleButton;
