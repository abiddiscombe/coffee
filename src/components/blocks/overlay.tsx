import { twMerge } from "tailwind-merge";
import { OverlayFilters } from "./overlay-filters";
import { OverlayPanel } from "./overlay-panel";

export const Overlay = () => {
  return (
    <div
      className={twMerge(
        "pointer-events-none *:pointer-events-auto z-20 flex",

        // Overrides - Mobile Viewports
        "flex-col justify-between",

        // Overrides - Desktop Viewports
        "sm:flex-row-reverse sm:justify-between",
      )}
    >
      <OverlayFilters
        className={twMerge(
          "m-3",

          // Overrides - Mobile Viewports
          "not-sm:place-self-end",
        )}
      />
      <OverlayPanel
        className={twMerge(
          // Overrides - Mobile Viewports
          "not-sm:border-b-0 not-sm:border-x-0 not-sm:rounded-b-none not-sm:shadow-[0px_0px_30px_-2px_rgba(0,0,0,0.60)]",

          // Overrides - Desktop Viewports
          "sm:m-3 sm:grow sm:max-w-sm",
        )}
      />
    </div>
  );
};
