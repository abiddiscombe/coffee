import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const cvaSurface = cva(
  "border-primary-200 overflow-hidden rounded-md border bg-white p-4",
  {
    variants: {
      shadow: {
        true: "shadow",
        false: "",
      },
      interactive: {
        true: "hover:bg-primary-100 active:bg-primary-200 cursor-pointer hover:shadow",
        false: "",
      },
    },
    defaultVariants: {
      shadow: false,
      interactive: false,
    },
  },
);

export const Surface = (
  p: React.HTMLAttributes<HTMLElement> &
    VariantProps<typeof cvaSurface> & {
      as?: React.ElementType;
      shadow?: boolean;
      interactive?: boolean;
    },
) => {
  const Tag = p.as ?? "div";

  return (
    <Tag
      {...{ ...p, shadow: undefined, interactive: undefined }}
      className={twMerge(
        cvaSurface({
          shadow: p.shadow,
          interactive: p.interactive,
          className: p.className,
        }),
      )}
    >
      {p.children}
    </Tag>
  );
};
