import * as SlotUtility from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const surfaceStyles = cva("p-4 rounded-xl border-base-200 border", {
  variants: {
    shadow: {
      true: "shadow",
      false: null,
    },
    transparent: {
      true: "bg-white/90 backdrop-blur-lg",
      false: "bg-white",
    },
  },
  defaultVariants: {
    shadow: false,
    transparent: false,
  },
});

type SurfaceProps = React.ComponentProps<"div"> &
  VariantProps<typeof surfaceStyles> & {
    asChild?: boolean;
  };

export const Surface = ({
  shadow,
  transparent,
  asChild,
  className,
  ...passthrough
}: SurfaceProps) => {
  const Element = asChild ? SlotUtility.Root : "div";

  return (
    <Element
      {...passthrough}
      className={twMerge(surfaceStyles({ shadow, transparent, className }))}
    />
  );
};
