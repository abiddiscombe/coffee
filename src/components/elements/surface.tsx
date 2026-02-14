import * as SlotUtility from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";
import { commonSurface } from "../common";

const surfaceStyles = cva(["p-4 rounded-xl", commonSurface], {
  variants: {
    shadow: {
      true: "shadow",
      false: null,
    },
  },
  defaultVariants: {
    shadow: false,
  },
});

type SurfaceProps = React.ComponentProps<"div"> &
  VariantProps<typeof surfaceStyles> & {
    asChild?: boolean;
  };

export const Surface = ({
  shadow,
  asChild,
  className,
  ...passthrough
}: SurfaceProps) => {
  const Element = asChild ? SlotUtility.Root : "div";

  return (
    <Element
      className={twMerge(surfaceStyles({ shadow, className }))}
      {...passthrough}
    />
  );
};
