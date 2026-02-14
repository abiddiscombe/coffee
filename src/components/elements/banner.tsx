import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const bannerStyles = cva("shrink-0 rounded border px-4 py-2", {
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

type BannerProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof bannerStyles>;

export const Banner = ({ variant, className, ...passthrough }: BannerProps) => {
  return (
    <aside
      {...passthrough}
      className={twMerge(bannerStyles({ variant, className }))}
    />
  );
};
