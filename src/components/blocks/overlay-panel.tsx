"use client";
import { Button } from "@/components/elements/button";
import { Spinner } from "@/components/elements/spinner";
import { Surface } from "@/components/elements/surface";
import { useActiveLocation } from "@/hooks/useActiveLocation";
import { LocationFeatureExtended } from "@/utilities/types/location";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { RotateCwIcon, XIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Icon } from "../elements/icon";
import { ToolGroup } from "../elements/tool-group";
import { Tooltip, TooltipContent } from "../elements/tooltip";
import { OverlayPanelLinks } from "./overlay-panel-links";
import { OverlayPanelTags } from "./overlay-panel-tags";

export const OverlayPanel = () => {
  const [location, setLocation] = useActiveLocation();
  const [locationInfo, setLocationInfo] = useState<LocationFeatureExtended>();
  const [locationInfoError, setLocationInfoError] = useState(false);
  const [locationInfoLoading, setLocationInfoLoading] = useState(true);

  const handleClosePanel = () => {
    setLocation();
  };

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

    /**
     * EXPERIMENTAL
     * Artificial delay to ensure loading state does
     * not "flicker" - better to look into other ways
     * to show the loading state / preload core metadata.
     */

    await new Promise((resolve) => setTimeout(resolve, 400));

    setLocationInfo(resJson);
    setLocationInfoLoading(false);
  }, [location]);

  useEffect(() => {
    if (location) {
      getDetails();
    }

    return () => {
      /**
       * Clear stale data if user selects a
       * new location whilst the panel is visible.
       */

      setLocationInfo(undefined);
    };
  }, [location, getDetails]);

  if (!location) {
    return null;
  }

  return (
    <Surface
      shadow
      className={twMerge(
        "sm:grow overflow-y-auto scroll-hidden animate-in fade-in grid place-items-center p-2 ",

        /** Overrides for small viewports */
        "not-sm:border-b-0 not-sm:border-x-0 not-sm:rounded-b-none not-sm:shadow-[0px_0px_30px_-2px_rgba(0,0,0,0.60)]",
      )}
    >
      {locationInfoLoading ? (
        <Spinner size="lg" />
      ) : (
        <>
          {locationInfoError ? (
            <div className="max-w-xs">
              <h2 className="text-lg">Looks like we need more coffee.</h2>
              <p>
                Sorry, we couldn&apos;t fetch information about this coffee
                shop.
              </p>
              <ToolGroup className="mt-4">
                <Button variant="primary" onClick={getDetails}>
                  <Icon>
                    <RotateCwIcon />
                  </Icon>
                  Retry
                </Button>
                <Button variant="secondary" onClick={handleClosePanel}>
                  Cancel
                </Button>
              </ToolGroup>
            </div>
          ) : (
            <div className="h-full w-full space-y-4">
              <Surface className="relative min-h-42">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      width="box"
                      variant="ghost"
                      onClick={handleClosePanel}
                      className="absolute top-1 right-1"
                    >
                      <Icon>
                        <XIcon />
                      </Icon>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Close Panel</TooltipContent>
                </Tooltip>
              </Surface>
              <div className="px-2">
                <h2 className="mb-4 text-2xl">
                  {locationInfo?.properties.name}
                </h2>

                {locationInfo?.properties.metadata.tags && (
                  <OverlayPanelTags
                    tags={locationInfo.properties.metadata.tags}
                  />
                )}
                {locationInfo?.properties.metadata?.website && (
                  <OverlayPanelLinks
                    website={locationInfo.properties.metadata.website}
                  />
                )}
              </div>
            </div>
          )}
        </>
      )}
    </Surface>
  );
};
