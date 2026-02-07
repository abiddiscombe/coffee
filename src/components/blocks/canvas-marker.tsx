import { NUQS_KEYS } from "@/utilities/constants";
import { LocationFeature } from "@/utilities/types/location";
import { Marker, useMap } from "@vis.gl/react-maplibre";
import { MapPinIcon } from "lucide-react";
import { useQueryState } from "nuqs";
import { twMerge } from "tailwind-merge";

export const CanvasMarker = (p: LocationFeature) => {
  const [activeLocationId, setActiveLocationId] = useQueryState(
    NUQS_KEYS.LOCATION_ID,
  );

  const { current: map } = useMap();

  const handleSelect = () => {
    setActiveLocationId(p.properties.id);

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
    "h-8 w-8 sm:h-6 sm:w-6 text-white cursor-pointer duration-150",
    activeLocationId === p.properties.id
      ? "fill-primary-950 h-10 w-10 sm:h-8 sm:w-8"
      : "fill-primary-800 sm:hover:h-7 sm:hover:w-7 hover:fill-primary-900 active:fill-primary-950",
  );

  return (
    <Marker
      anchor="bottom"
      latitude={p.geometry.coordinates[1]}
      longitude={p.geometry.coordinates[0]}
      className={activeLocationId === p.id ? "z-10" : "hover:z-10"}
    >
      <MapPinIcon className={classes} onClick={handleSelect} />
    </Marker>
  );
};
