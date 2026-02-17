import { Canvas } from "@/components/blocks/canvas";
import { Overlay } from "@/components/blocks/overlay";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <main className="grid h-full grid-cols-1 grid-rows-1 *:col-1 *:row-1">
        <Canvas />
        <Overlay />
      </main>
    </Suspense>
  );
}
