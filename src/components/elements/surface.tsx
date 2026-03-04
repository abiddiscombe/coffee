import * as SlotUtility from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const surfaceStyles = cva(["p-4 rounded-xl border-base-200 border "], {
  variants: {
    shadow: {
      true: "shadow",
      false: null,
    },
    transparency: {
      true: "bg-white/85 backdrop-blur-md",
      false: "bg-white",
    },
  },
  defaultVariants: {
    shadow: false,
    transparency: true,
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
      {...passthrough}
      className={twMerge(surfaceStyles({ shadow, className }))}
    />
  );
};
