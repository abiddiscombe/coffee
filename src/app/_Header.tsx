import { Tag } from "@/components/elements/tag";
import { Typography } from "@/components/elements/typography";
import HeaderOverview from "./_HeaderOverview";

export default function Header() {
  return (
    <header className="border-b-primary-200 flex min-h-14 items-center justify-between gap-4 border-b bg-white px-4 py-0.5 sm:px-6">
      <Typography variant="h1" className="font-semibold">
        Coffee Map
      </Typography>
      <hr className="grow border-none" />
      <Tag variant="orange">Beta</Tag>
      <HeaderOverview />
    </header>
  );
}
