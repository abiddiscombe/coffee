import * as SlotUtility from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const iconStyles = cva("text-inherit stroke-2", {
  variants: {
    size: {
      sm: "size-3",
      md: "size-4",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type IconProps = React.ComponentProps<typeof SlotUtility.Root> &
  VariantProps<typeof iconStyles>;

export const Icon = ({ size, className, ...passthrough }: IconProps) => {
  return (
    <SlotUtility.Root
      {...passthrough}
      className={twMerge(iconStyles({ size, className }))}
    />
  );
};
