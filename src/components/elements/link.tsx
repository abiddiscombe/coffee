import * as SlotUtility from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { twMerge } from "tailwind-merge";

const linkStyles = cva(
  "underline underline-offset-2 decoration-base-400 ihover:decoration-inherit iactive:decoration-2",
);

type LinkProps = React.ComponentProps<"a"> &
  VariantProps<typeof linkStyles> & { asChild?: boolean };

export const Link = ({ asChild, className, ...passthrough }: LinkProps) => {
  const Element = asChild ? SlotUtility.Root : "a";

  return (
    <Element {...passthrough} className={twMerge(linkStyles({ className }))} />
  );
};
