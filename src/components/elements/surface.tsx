import * as SlotUtility from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const surfaceStyles = cva(
  "border-primary-200 overflow-hidden rounded-xl border bg-white p-4",
  {
    variants: {
      shadow: {
        true: "shadow",
        false: null,
      },
    },
    defaultVariants: {
      shadow: false,
    },
  },
);

type SurfaceProps = React.ComponentProps<"div"> &
  VariantProps<typeof surfaceStyles> & {
    asChild?: boolean;
  };

export const Surface = ({ shadow, className, ...p }: SurfaceProps) => {
  const Element = p.asChild ? SlotUtility.Root : "div";

  return (
    <Element
      {...p}
      className={twMerge(
        surfaceStyles({
          shadow: shadow,
          className: className,
        }),
      )}
    />
  );
};
