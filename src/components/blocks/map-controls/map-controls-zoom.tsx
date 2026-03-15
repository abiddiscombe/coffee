"use client";
import { useMap } from "@vis.gl/react-maplibre";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "../../elements/button";
import { Icon } from "../../elements/icon";

export const MapControlsZoom = () => {
  const { mapA } = useMap();

  const handleZoomIn = () => {
    mapA?.zoomIn();
  };

  const handleZoomOut = () => {
    mapA?.zoomOut();
  };

  return (
    <div className="shadow">
      <Button
        width="box"
        className="border-b-0 rounded-b-none"
        onClick={handleZoomIn}
      >
        <Icon>
          <PlusIcon />
        </Icon>
      </Button>
      <Button width="box" className="rounded-t-none" onClick={handleZoomOut}>
        <Icon>
          <MinusIcon />
        </Icon>
      </Button>
    </div>
  );
};
