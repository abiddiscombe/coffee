"use client";
import { MapControlsFilters } from "./map-controls-filters";
import { MapControlsZoom } from "./map-controls-zoom";

export const MapControls = () => {
  return (
    <div className="pointer-events-none *:pointer-events-auto z-20 flex justify-end p-4">
      <nav className="space-y-2">
        <MapControlsFilters />
        <MapControlsZoom />
      </nav>
    </div>
  );
};
