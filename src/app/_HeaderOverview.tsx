"use client";
import { GithubIcon } from "lucide-react";
import Button from "@/components/Button";

export default function HeaderOverview() {
  // @todo Replace this link and icon with a dialog.
  // @todo Use alternative source for GitHub logo icon.

  function openLink() {
    window.open("https://github.com/abiddiscombe/coffee", "_blank");
  }

  return (
    <Button variant="ghost" size="icon" onClick={openLink}>
      <GithubIcon className="w-4.5 h-4.5" />
    </Button>
  );
}
