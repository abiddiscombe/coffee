import * as SlotUtility from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(
  "flex cursor-pointer items-center shrink-0 border hover:duration-150",
  {
    variants: {
      size: {
        sm: "h-7 min-w-7 text-sm",
        md: "h-9 min-w-9 text-sm",
        lg: "h-11 min-w-11 text-base",
      },
      width: {
        box: "justify-center rounded-full",
        auto: "justify-center rounded",
        full: "w-full justify-start rounded",
      },
      variant: {
        ghost: null,
        primary: null,
        secondary: null,
        destructive: null,
      },
    },
    defaultVariants: {
      size: "md",
      width: "auto",
      variant: "secondary",
    },
    compoundVariants: [
      {
        size: "sm",
        width: ["auto", "full"],
        className: "gap-2 px-2",
      },
      {
        size: "md",
        width: ["auto", "full"],
        className: "gap-2 px-5",
      },
      {
        size: "lg",
        width: ["auto", "full"],
        className: "gap-4 px-6",
      },
      {
        variant: "ghost",
        className: [
          "text-base-800  [&>svg]:text-base-800 ",
          "ihover:bg-base-100 iactive:bg-base-200",
          "ihover:border-base-100 iactive:border-base-200 border-transparent",
        ],
      },
      {
        variant: "primary",
        className: [
          "text-white [&>svg]:text-white",
          "ihover:bg-accent-700 iactive:bg-accent-800 bg-accent-600",
          "ihover:border-accent-700 iactive:border-accent-800 border-accent-600",
        ],
      },
      {
        variant: "secondary",
        className: [
          "text-base-800 [&>svg]:text-base-800",
          " ihover:bg-base-100  iactive:bg-base-200  bg-white",
          "border-base-300 ",
        ],
      },
      {
        variant: "destructive",
        className: [
          "text-white [&>svg]:text-white",
          "ihover:bg-destructive-700 iactive:bg-destructive-800  bg-destructive-600 ",
          "ihover:border-destructive-700 iactive:border-destructive-800  border-destructive-600 ",
        ],
      },
    ],
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonStyles> & {
    asChild?: boolean;
  };

export const Button = ({
  size,
  width,
  variant,
  asChild,
  className,
  ...passthrough
}: ButtonProps) => {
  const Element = asChild ? SlotUtility.Root : "button";

  return (
    <Element
      {...passthrough}
      className={twMerge(
        buttonStyles({
          size,
          width,
          variant,
          className,
        }),
      )}
    />
  );
};

Button.displayName = "Button";
