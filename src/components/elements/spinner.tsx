import { cva, type VariantProps } from "class-variance-authority";

const spinnerStyles = cva("rounded-full animate-spin border", {
  variants: {
    size: {
      sm: "size-3 border-2",
      md: "size-4 border-2",
      lg: "size-8 border-4",
    },
    color: {
      base: "border-base-200 border-r-base",
      accent: "border-accent-200 border-r-accent",
    },
  },
  defaultVariants: {
    size: "md",
    color: "accent",
  },
});

type SpinnerProps = React.ComponentProps<"div"> &
  VariantProps<typeof spinnerStyles>;

export const Spinner = ({
  size,
  color,
  className,
  ...passthrough
}: SpinnerProps) => {
  return (
    <div
      {...passthrough}
      role="status"
      className={spinnerStyles({ size, color, className })}
    />
  );
};
