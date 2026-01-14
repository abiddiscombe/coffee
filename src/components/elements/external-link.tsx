import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const cvaExternalLink = cva(
  "decoration-primary-200 text-inherit underline underline-offset-2 hover:decoration-inherit active:decoration-2",
);

export const ExternalLink = (
  p: React.AnchorHTMLAttributes<HTMLAnchorElement> &
    VariantProps<typeof cvaExternalLink>,
) => {
  return (
    <a
      {...p}
      target="_blank"
      className={twMerge(cvaExternalLink({ className: p.className }))}
      rel="external nofollow noreferrer"
      aria-label={`${p.children} (Opens in a New Tab)`}
    >
      {p.children}
    </a>
  );
};
