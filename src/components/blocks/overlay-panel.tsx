"use client";
import { Button } from "@/components/elements/button";
import { Spinner } from "@/components/elements/spinner";
import { Surface } from "@/components/elements/surface";
import { Typography } from "@/components/elements/typography";
import { NUQS_KEYS } from "@/utilities/constants";
import { LocationExtended } from "@/utilities/types/location";
import { XIcon } from "lucide-react";
import { useQueryState } from "nuqs";
import { useCallback, useEffect, useState } from "react";
import { OverlayPanelLinks } from "./overlay-panel-links";
import { OverlayPanelTags } from "./overlay-panel-tags";

export const OverlayPanel = () => {
  const [location, setLocation] = useQueryState(NUQS_KEYS.LOCATION_ID);
  const [locationInfo, setLocationInfo] = useState<LocationExtended>();
  const [locationInfoError, setLocationInfoError] = useState(false);
  const [locationInfoLoading, setLocationInfoLoading] = useState(true);

  function handleClosePanel() {
    setLocation(null);
  }

  const getDetails = useCallback(async () => {
    setLocationInfoError(false);
    setLocationInfoLoading(true);
    const res = await fetch(`/api/locations/${location}`);

    if (res.status !== 200) {
      console.warn(`Failed to GET '/api/locations/${location}'`);
      setLocationInfoError(true);
      setLocationInfoLoading(false);
      return;
    }

    const resJson = await res.json();
    setLocationInfo(resJson.location);
    setLocationInfoLoading(false);
  }, [location]);

  useEffect(() => {
    if (location) {
      getDetails();
    }

    return () => {
      // Clear stale data if user selects a
      // new location whilst the panel is visible.

      setLocationInfo(undefined);
    };
  }, [location, getDetails]);

  if (!location) {
    return null;
  }

  return (
    <Surface
      shadow={true}
      className="transition-fade m-4 grid min-h-64 max-w-sm place-items-center p-8"
    >
      {locationInfoLoading ? (
        <Spinner />
      ) : (
        <>
          {locationInfoError ? (
            <div className="max-w-xs">
              <Typography variant="h2">
                Looks like we need more coffee.
              </Typography>
              <Typography variant="body">
                Sorry, we couldn&apos;t fetch information about this coffee
                shop.
              </Typography>
              <div className="flex items-center gap-2">
                <Button variant="solid" onClick={getDetails}>
                  Retry
                </Button>
                <Button variant="ghost" onClick={handleClosePanel}>
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <div className="h-full w-full">
              <div className="mb-4 flex items-start justify-between gap-2">
                <Typography variant="h2" className="mt-1.5 mb-0">
                  {locationInfo?.name}
                </Typography>
                <Button size="icon" onClick={handleClosePanel}>
                  <XIcon className="stroke-3" />
                </Button>
              </div>
              {locationInfo?.tags && (
                <OverlayPanelTags tags={locationInfo.tags} />
              )}
              {(locationInfo?.metadata?.website ||
                locationInfo?.metadata?.address) && (
                <OverlayPanelLinks
                  website={locationInfo.metadata.website}
                  address={locationInfo.metadata.address}
                />
              )}
            </div>
          )}
        </>
      )}
    </Surface>
  );
};
