import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const cvaButton = cva(
  "flex shrink-0 cursor-pointer items-center rounded border",
  {
    variants: {
      size: {
        text: "h-9 max-h-9 gap-3 px-4 [&>svg]:h-4 [&>svg]:w-4",
        icon: "h-9 max-h-9 w-10 max-w-10 justify-center [&>svg]:h-4 [&>svg]:w-4",
      },
      variant: {
        ghost:
          "text-primary-800 hover:bg-primary-100 active:bg-primary-200 hover:border-primary-100 active:border-primary-200 border-none bg-transparent",
        solid:
          "bg-primary-950 hover:bg-primary-800 active:bg-primary-700 border-primary-950 hover:border-primary-800 active:border-primary-700 text-white shadow-sm",
        outline:
          "text-primary-800 hover:bg-primary-100 active:bg-primary-200 border-primary-200 bg-transparent",
        destructive:
          "border-red-600 bg-red-600 text-white shadow-sm hover:border-red-700 hover:bg-red-700 active:border-red-800 active:bg-red-800",
      },
    },
    defaultVariants: {
      size: "text",
      variant: "outline",
    },
  },
);

export const Button = (
  p: React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof cvaButton>,
) => {
  return (
    <button
      {...p}
      className={twMerge(
        cvaButton({
          size: p.size,
          variant: p.variant,
          className: p.className,
        }),
      )}
    >
      {p.children}
    </button>
  );
};
