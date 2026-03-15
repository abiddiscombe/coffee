"use client";
import { MapCanvas } from "@/components/blocks/map-canvas/map-canvas";
import { MapControls } from "@/components/blocks/map-controls/map-controls";
import { MapSidePanel } from "@/components/blocks/map-side-panel/map-side-panel";
import { MapProvider } from "@vis.gl/react-maplibre";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <MapProvider>
        <main className="grid h-full grid-cols-1 grid-rows-1 *:col-1 *:row-1">
          <MapCanvas />
          <MapControls />
          <MapSidePanel />
        </main>
      </MapProvider>
    </Suspense>
  );
}
