"use client";
import { LOCATION_FILTERS, NUQS_KEYS } from "@/utilities/constants";
import { getBasemapConfig } from "@/utilities/ngd-basemap";
import { type LocationFeature } from "@/utilities/types/location";
import { Map, NavigationControl } from "@vis.gl/react-maplibre";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Spinner } from "../elements/spinner";
import { CanvasMarker } from "./canvas-marker";

export const Canvas = () => {
  const [appliedFilters] = useQueryState(
    NUQS_KEYS.FILTERS,
    parseAsArrayOf(parseAsString),
  );

  const [mapLoaded, setMapLoaded] = useState<0 | 1 | 2>(0);
  const [locations, setLocations] = useState<LocationFeature[]>([]);

  const onLoadHandler = () => {
    setMapLoaded(1);
    setTimeout(() => setMapLoaded(2), 500);
  };

  const filterLocationVisibility = (location: LocationFeature) => {
    if (!appliedFilters?.length) {
      return true;
    }

    for (let i = 0; i < LOCATION_FILTERS.length; i++) {
      const filterEntry = LOCATION_FILTERS[i];

      if (
        appliedFilters.includes(filterEntry.id) &&
        !location.properties.metadata.tags.includes(filterEntry.id)
      ) {
        return false;
      }
    }

    return true;
  };

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/locations");

      if (res.status !== 200) {
        console.error("Failed to GET '/api/locations'");
        return;
      }

      const resJson = await res.json();
      setLocations(resJson.features);
    })();
  }, []);

  return (
    <>
      <Map
        mapLib={maplibregl}
        mapStyle={getBasemapConfig()}
        minZoom={12}
        maxZoom={15}
        onLoad={onLoadHandler}
        dragRotate={false}
        touchPitch={false}
        maxBounds={[-1.637993, 50.82177, -1.167297, 50.985667]}
        initialViewState={{
          zoom: 13,
          latitude: 50.910542,
          longitude: -1.399105,
        }}
        style={{ gridRow: 1, gridColumn: 1, zIndex: 0 }}
      >
        <NavigationControl
          showCompass={false}
          style={{ margin: "1em", marginTop: "5.6em" }}
        />
        {locations.filter(filterLocationVisibility).map((location) => (
          <CanvasMarker key={location.properties.id} {...location} />
        ))}
      </Map>
      {mapLoaded !== 2 && (
        <div
          role="status"
          aria-hidden={mapLoaded > 0}
          className={twMerge(
            "transition-opacity duration-300 aria-hidden:opacity-0",
            "z-10 bg-linear-to-t from-[#f3f3f4] to-[#ebece7] grid place-items-center",
          )}
        >
          <Spinner size="lg" color="base" />
        </div>
      )}
    </>
  );
};
