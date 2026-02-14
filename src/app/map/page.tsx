import { Canvas } from "@/components/blocks/canvas";
import { OverlayNav } from "@/components/blocks/overlay-nav";
import { OverlayPanel } from "@/components/blocks/overlay-panel";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <div className="grid h-full grid-cols-1 grid-rows-1 *:col-1 *:row-1">
        <Canvas />
        <div className="pointer-events-none z-20 flex flex-col justify-between pb-12 sm:block *:pointer-events-auto">
          <OverlayNav />
          <OverlayPanel />
        </div>
      </div>
    </Suspense>
  );
}
