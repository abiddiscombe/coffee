import { Button } from "@/components/elements/button";
import { Typography } from "@/components/elements/typography";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid h-full place-items-center p-6">
      <div className="text-center">
        <Typography variant="h2">404</Typography>
        <Typography variant="body">No coffee found here!</Typography>
        <Link href="/map" passHref>
          <Button variant="solid" className="mx-auto cursor-pointer">
            Explore Map
          </Button>
        </Link>
      </div>
    </div>
  );
}
