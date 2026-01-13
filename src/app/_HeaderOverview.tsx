"use client";
import Button from "@/components/Button";
import { GithubIcon } from "lucide-react";

export default function HeaderOverview() {
  // @todo Replace this link and icon with a dialog.
  // @todo Use alternative source for GitHub logo icon.

  function openLink() {
    window.open("https://github.com/abiddiscombe/coffee", "_blank");
  }

  return (
    <Button variant="ghost" size="icon" onClick={openLink}>
      <GithubIcon className="h-4.5 w-4.5" />
    </Button>
  );
}
