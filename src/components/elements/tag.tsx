import * as SlotUtility from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const tagStyles = cva("block shrink-0 rounded-full px-3 py-0.5 text-sm", {
  variants: {
    variant: {
      red: "bg-red-200 text-red-700",
      gray: "bg-gray-200 text-gray-700",
      blue: "bg-blue-200 text-blue-700",
      green: "bg-green-200 text-green-700",
      orange: "bg-orange-200 text-orange-700",
    },
  },
  defaultVariants: {
    variant: "gray",
  },
});

type TagProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof tagStyles> & {
    asChild?: boolean;
  };

export const Tag = ({
  variant,
  asChild,
  className,
  ...passthrough
}: TagProps) => {
  const Element = asChild ? SlotUtility.Root : "span";

  return (
    <Element
      {...passthrough}
      className={twMerge(tagStyles({ variant, className }))}
    />
  );
};
