"use client";
import { Button } from "@/components/elements/button";
import { LOCATION_FILTERS, NUQS_KEYS } from "@/utilities/constants";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { twMerge } from "tailwind-merge";
import { Icon } from "../elements/icon";

export const OverlayHeaderFilters = () => {
  const [activeFilters, setActiveFilters] = useQueryState(
    NUQS_KEYS.FILTERS,
    parseAsArrayOf(parseAsString),
  );

  const setFilter = (filterId: string) => {
    if (activeFilters?.includes(filterId)) {
      setActiveFilters(activeFilters?.filter((item) => item !== filterId));
      return;
    }

    setActiveFilters((old) => (old ? [...old, filterId] : [filterId]));
  };

  return (
    <div>
      <span className="block pl-2 mt-1 mb-2 text-sm text-base-500 italic">
        Filter locations...
      </span>
      <div className="grid grid-cols-2 gap-2">
        {LOCATION_FILTERS?.map((filter) => {
          const isActive = activeFilters?.includes(filter.id);
          const isPending = filter.pending;

          if (isPending) {
            return null;
          }

          return (
            <Button
              key={filter.id}
              size="sm"
              width="full"
              role="checkbox"
              variant="ghost"
              aria-checked={isActive}
              onClick={() => setFilter(filter.id)}
              className={twMerge(
                !!activeFilters?.length && "text-base-500",
                isActive &&
                  "border-accent-100 bg-accent-100 *:stroke-accent-900 text-accent-900 aria-checked:ihover:bg-accent-200 aria-checked:ihover:border-accent-200",
              )}
            >
              <Icon size="sm">
                <filter.icon />
              </Icon>
              {filter.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
