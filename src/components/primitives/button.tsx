import { forwardRef } from "react";

import { Button as RAButton, ButtonProps } from "react-aria-components";
import { ccc } from "@kozento/utils";

type Props = ButtonProps & {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  rounding?: "none" | "small" | "medium" | "large";
  fill?: boolean;
  className?: string;
};

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      variant = "primary",
      size = "large",
      rounding = "medium",
      fill,
      isDisabled,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <RAButton
        ref={ref}
        className={ccc(
          "px-4 py-2 font-semibold outline-none",

          variant === "primary" &&
            "text-white bg-tmdb-lightblue hover:text-tmdb-darkblue",
          variant === "secondary" &&
            "text-white bg-tmdb-lightblue hover:bg-tmdb-blue",

          size === "small" && "text-sm",
          size === "medium" && "text-lg",
          size === "large" && "text-2xl",

          rounding === "none" && "rounded-none",
          rounding === "small" && "rounded",
          rounding === "medium" && "rounded-lg",
          rounding === "large" && "rounded-2xl",

          fill && "w-full",

          isDisabled && "cursor-default !text-tmdb-darkgray !bg-tmdb-lightgray",

          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
