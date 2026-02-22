import { useActiveLocation } from "@/hooks/useActiveLocation";
import { LocationFeature } from "@/utilities/types/location";
import { Marker, useMap } from "@vis.gl/react-maplibre";
import { MapPinIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

export const CanvasMarker = (p: LocationFeature) => {
  const [activeLocation, setActiveLocation] = useActiveLocation();

  const { current: map } = useMap();

  const handleSelect = () => {
    setActiveLocation(p.properties.id);

    if (map && window?.innerWidth <= 800) {
      // On mobile viewports, center the map on the selected
      // location. Position it slightly above the central
      // point to account for the information panel.

      const MAGIC_LAT_DIFF_LG_SCALE = 0.0016;
      const MAGIC_LAT_DIFF_SM_SCALE = 0.0065;

      const adjustedLatitude =
        p.geometry.coordinates[1] -
        (map.getZoom() >= 13
          ? MAGIC_LAT_DIFF_LG_SCALE
          : MAGIC_LAT_DIFF_SM_SCALE);

      map?.flyTo({ center: [p.geometry.coordinates[0], adjustedLatitude] });
    }
  };

  const classes = twMerge(
    "size-8 sm:size-6 text-white cursor-pointer duration-150 ",
    activeLocation === p.properties.id
      ? "fill-accent-800 size-10 sm:size-8 drop-shadow-[0px_2px_2px_#00000090]"
      : "fill-accent sm:hover:size-7 hover:fill-accent-700 active:fill-accent-800 drop-shadow-[0px_2px_2px_#00000060]",
  );

  return (
    <Marker
      anchor="bottom"
      latitude={p.geometry.coordinates[1]}
      longitude={p.geometry.coordinates[0]}
      className={activeLocation === p.id ? "z-10" : "hover:z-20"}
    >
      <MapPinIcon className={classes} onClick={handleSelect} />
    </Marker>
  );
};
