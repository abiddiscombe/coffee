"use client";
import { LOCATION_FILTERS, NUQS_KEYS } from "@/utilities/constants";
import { getBasemapConfig } from "@/utilities/ngdBase";
import { type Location } from "@/utilities/types/location";
import { Map, NavigationControl } from "@vis.gl/react-maplibre";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import { CanvasMarker } from "./canvas-marker";

export const Canvas = () => {
  const [appliedFilters] = useQueryState(
    NUQS_KEYS.FILTERS,
    parseAsArrayOf(parseAsString),
  );

  const [locations, setLocations] = useState<Location[]>([]);

  const getLocations = async () => {
    const res = await fetch("/api/locations");

    if (res.status !== 200) {
      console.error("Failed to GET '/api/locations'");
      return;
    }

    const resJson = await res.json();
    setLocations(resJson.locations);
  };

  const filterLocationVisibility = (location: Location) => {
    if (!appliedFilters?.length) {
      return true;
    }

    for (let i = 0; i < LOCATION_FILTERS.length; i++) {
      const filterEntry = LOCATION_FILTERS[i];

      if (
        appliedFilters.includes(filterEntry.id) &&
        !location.tags.includes(filterEntry.id)
      ) {
        return false;
      }
    }

    return true;
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <Map
      mapLib={maplibregl}
      mapStyle={getBasemapConfig()}
      minZoom={12}
      maxZoom={15}
      dragRotate={false}
      touchPitch={false}
      maxBounds={[-2.308159, 51.83705, -1.865959, 51.971346]}
      initialViewState={{
        zoom: 12.5,
        latitude: 51.900091,
        longitude: -2.076931,
      }}
      style={{ gridRow: 1, gridColumn: 1, zIndex: 0 }}
    >
      <NavigationControl
        showCompass={false}
        style={{ margin: "1em", marginTop: "5.6em" }}
      />
      {locations.filter(filterLocationVisibility).map((location) => (
        <CanvasMarker key={location.id} {...location} />
      ))}
    </Map>
  );
};
