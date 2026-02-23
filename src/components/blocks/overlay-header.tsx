import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { Settings2Icon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Button } from "../elements/button";
import { Icon } from "../elements/icon";
import { Surface } from "../elements/surface";
import { OverlayHeaderFilters } from "./overlay-header-filters";

export const OverlayHeader = () => {
  return (
    <CollapsiblePrimitive.Root asChild>
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
            className="p-1 not-sm:py-2 border-0 flex items-center z-10 not-sm:rounded-t-none"
          >
            <h1
              id="logo"
              className="text-lg font-light px-2 grow tracking-tight text-primary-950"
            >
              Coffee Explorer
            </h1>
            <CollapsiblePrimitive.Trigger asChild>
              <Button
                width="box"
                variant="ghost"
                aria-label="Toggle the results filtering panel"
              >
                <Icon>
                  <Settings2Icon />
                </Icon>
              </Button>
            </CollapsiblePrimitive.Trigger>
          </Surface>
          <CollapsiblePrimitive.Content asChild>
            <nav className="p-2 animate-collapsible-down data-[state=closed]:animate-collapsible-up *:animate-in *:fade-in *:slide-in-from-top-10">
              <OverlayHeaderFilters />
            </nav>
          </CollapsiblePrimitive.Content>
        </header>
      </Surface>
    </CollapsiblePrimitive.Root>
  );
};
