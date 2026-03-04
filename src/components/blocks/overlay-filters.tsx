"use client";
import { useActiveFilters } from "@/hooks/useActiveFilters";
import { filters } from "@/utilities/filters";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { ChevronDownIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Button } from "../elements/button";
import { Icon } from "../elements/icon";
import { Surface } from "../elements/surface";

export const OverlayFilters = () => {
  const [activeFilters, toggleFilters] = useActiveFilters();

  return (
    <CollapsiblePrimitive.Root asChild defaultOpen>
      <Surface
        asChild
        shadow
        className={twMerge(
          "p-0 overflow-clip data-[state=open]:[&>div]:border-b",

          /** Overrides for small viewports */
          "not-sm:rounded-t-none not-sm:border-x-0 not-sm:border-t-0",
        )}
      >
        <header>
          <Surface
            shadow
            className="p-1 not-sm:py-2 border-0 flex items-center z-10 not-sm:rounded-t-none bg-transparent!"
          >
            <h2 id="logo" className="px-2 grow text-primary-700">
              Filters
            </h2>
            <CollapsiblePrimitive.Trigger asChild>
              <Button
                width="box"
                variant="ghost"
                aria-label="Toggle the results filtering panel"
                className="data-[state=open]:*:rotate-180 *:transition-transform"
              >
                <Icon>
                  <ChevronDownIcon />
                </Icon>
              </Button>
            </CollapsiblePrimitive.Trigger>
          </Surface>
          <CollapsiblePrimitive.Content asChild>
            <nav className="p-2 animate-collapsible-down data-[state=closed]:animate-collapsible-up *:animate-in *:fade-in *:slide-in-from-top-10">
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
            </nav>
          </CollapsiblePrimitive.Content>
        </header>
      </Surface>
    </CollapsiblePrimitive.Root>
  );
};
