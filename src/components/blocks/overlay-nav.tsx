"use client";
import { Button } from "@/components/elements/button";
import { LOCATION_FILTERS, NUQS_KEYS } from "@/utilities/constants";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";

export const OverlayNav = () => {
  const [activeFilters, setActiveFilters] = useQueryState(
    NUQS_KEYS.FILTERS,
    parseAsArrayOf(parseAsString),
  );

  function setFilter(filterId: string) {
    if (activeFilters?.includes(filterId)) {
      setActiveFilters(activeFilters?.filter((item) => item !== filterId));
      return;
    }

    setActiveFilters((old) => (old ? [...old, filterId] : [filterId]));
  }

  return (
    <nav className="border-b-primary-200 scrollbar-none z-50 flex items-center gap-4 overflow-x-auto border-b bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xs sm:px-6">
      {LOCATION_FILTERS?.map((filter) => {
        const isActive = activeFilters?.includes(filter.id);
        const isPending = filter.pending;

        if (isPending) {
          return null;
        }

        return (
          <Button
            key={filter.id}
            role="checkbox"
            aria-checked={isActive}
            onClick={() => setFilter(filter.id)}
            className={[
              "h-10 min-h-10 rounded-full bg-white text-sm shadow-xs sm:h-8 sm:min-h-8",
              isActive &&
                "not:hover:border-green-200 bg-green-100 text-green-800 hover:bg-green-200",
            ].join(" ")}
          >
            <filter.icon />
            {filter.label}
          </Button>
        );
      })}
    </nav>
  );
};
