import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const cvaDivider = cva("border-t-primary-200 my-6 border-t");

export const Divider = (
  p: React.HTMLAttributes<HTMLHRElement> & VariantProps<typeof cvaDivider>,
) => {
  return (
    <hr {...p} className={twMerge(cvaDivider({ className: p.className }))} />
  );
};
