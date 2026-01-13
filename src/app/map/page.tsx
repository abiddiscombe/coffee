import { Suspense } from "react";
import Canvas from "./_Canvas";
import OverlayNav from "./_OverlayNav";
import OverlayPanel from "./_OverlayPanel";

export default function Page() {
  return (
    <Suspense>
      <div className="grid h-full grid-cols-1 grid-rows-1 [&>*]:col-1 [&>*]:row-1">
        <Canvas />
        <div className="pointer-events-none z-20 flex flex-col justify-between pb-12 sm:block [&>*]:pointer-events-auto">
          <OverlayNav />
          <OverlayPanel />
        </div>
      </div>
    </Suspense>
  );
}
