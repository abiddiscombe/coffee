import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const cvaBanner = cva("shrink-0 rounded border px-4 py-2", {
  variants: {
    variant: {
      info: "border-blue-200 bg-blue-300/40 text-blue-800",
      error: "border-red-200 bg-red-300/40 text-red-800",
      warning: "border-orange-200 bg-orange-300/40 text-orange-800",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

export default function Banner(
  p: React.HTMLAttributes<HTMLElement> & VariantProps<typeof cvaBanner>,
) {
  const classes = twMerge(
    cvaBanner({ variant: p.variant, className: p.className }),
  );

  return (
    <aside {...p} className={classes}>
      {p.children}
    </aside>
  );
}
