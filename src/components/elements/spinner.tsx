import { cva, type VariantProps } from "class-variance-authority";

const spinnerStyles = cva(
  "rounded-full animate-spin border border-accent-200 dark:border-accent-900 border-r-accent dark:border-r-accent-400",
  {
    variants: {
      size: {
        sm: "size-3 border-2",
        md: "size-4 border-2",
        lg: "size-8 border-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

type SpinnerProps = React.ComponentProps<"div"> &
  VariantProps<typeof spinnerStyles>;

export const Spinner = ({ size, className, ...passthrough }: SpinnerProps) => {
  return (
    <div
      role="status"
      className={spinnerStyles({ size, className })}
      {...passthrough}
    />
  );
};
