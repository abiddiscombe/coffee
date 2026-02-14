import * as SlotUtility from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { twMerge } from "tailwind-merge";

const toolGroupStyles = cva("flex gap-3", {
  variants: {
    axis: {
      x: "flex-row items-center",
      y: "flex-col items-stretch",
    },
  },
  defaultVariants: {
    axis: "x",
  },
});

type ToolGroupProps = React.ComponentProps<"div"> &
  VariantProps<typeof toolGroupStyles> & {
    asChild?: boolean;
  };

export const ToolGroup = ({
  axis,
  asChild,
  className,
  ...passthrough
}: ToolGroupProps) => {
  const Element = asChild ? SlotUtility.Root : "div";

  return (
    <Element
      {...passthrough}
      className={twMerge(toolGroupStyles({ axis, className }))}
    />
  );
};
