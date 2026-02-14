import { Button } from "@/components/elements/button";
import { Icon } from "@/components/elements/icon";
import { MapIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid h-full place-items-center p-6">
      <div className="text-center">
        <h2 className="text-lg">404</h2>
        <p className="mb-4">No coffee found here!</p>
        <Button variant="primary" asChild>
          <Link href="/map">
            <Icon>
              <MapIcon />
            </Icon>
            View Map
          </Link>
        </Button>
      </div>
    </div>
  );
}
