"use client";
import { useActiveFilters } from "@/hooks/useActiveFilters";
import { filters } from "@/utilities/filters";
import * as RadixToggleGroup from "@radix-ui/react-toggle-group";
import { FilterIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Button } from "../elements/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "../elements/dropdown-menu";
import { Icon } from "../elements/icon";

export const OverlayFilters = ({ className }: React.ComponentProps<"nav">) => {
  const [activeFilters, refreshFilters] = useActiveFilters();

  return (
    <nav className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button width="box" className="shadow-lg relative">
            <Icon>
              <FilterIcon />
            </Icon>
            {!!activeFilters.length && (
              <div
                aria-hidden
                className="size-2.5 bg-accent rounded-full absolute top-1.5 right-1.5"
              />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent
            side="right"
            align="start"
            sideOffset={10}
            className="animate-in fade-in slide-in-from-right-10 min-w-[13em]"
          >
            <RadixToggleGroup.Root
              type="multiple"
              value={activeFilters}
              onValueChange={(value) => refreshFilters(value)}
              className="space-y-1 "
            >
              {filters?.map((filter) => {
                const isActive = activeFilters?.includes(filter.id);

                return (
                  <RadixToggleGroup.Item
                    key={filter.id}
                    value={filter.id}
                    asChild
                  >
                    <Button
                      width="full"
                      variant="ghost"
                      className={twMerge(
                        !!activeFilters?.length &&
                          "text-base-500 *:stroke-base-500",
                        isActive &&
                          "border-accent-100 bg-accent-100 *:stroke-accent-900 text-accent-900 aria-checked:ihover:bg-accent-200 aria-checked:ihover:border-accent-200",
                      )}
                    >
                      <Icon>{filter.icon}</Icon>
                      {filter.label}
                    </Button>
                  </RadixToggleGroup.Item>
                );
              })}
            </RadixToggleGroup.Root>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </nav>
  );
};
