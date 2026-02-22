"use client";
import { Button } from "@/components/elements/button";
import { useActiveFilters } from "@/hooks/useActiveFilters";
import { filters } from "@/utilities/filters";
import { twMerge } from "tailwind-merge";
import { Icon } from "../elements/icon";

export const OverlayHeaderFilters = () => {
  const [activeFilters, toggleFilters] = useActiveFilters();

  return (
    <div>
      <span className="block pl-2 mt-1 mb-2 text-sm text-base-500 italic">
        Filter locations...
      </span>
      <div className="grid grid-cols-2 gap-2">
        {filters?.map((filter) => {
          const isActive = activeFilters?.includes(filter.id);

          return (
            <Button
              key={filter.id}
              size="sm"
              width="full"
              role="checkbox"
              variant="ghost"
              aria-checked={isActive}
              onClick={() => toggleFilters(filter.id)}
              className={twMerge(
                !!activeFilters?.length && "text-base-500",
                isActive &&
                  "border-accent-100 bg-accent-100 *:stroke-accent-900 text-accent-900 aria-checked:ihover:bg-accent-200 aria-checked:ihover:border-accent-200",
              )}
            >
              <Icon size="sm">{filter.icon}</Icon>
              {filter.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
