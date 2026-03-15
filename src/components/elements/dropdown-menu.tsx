import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { twMerge } from "tailwind-merge";
import { Surface } from "./surface";

export const DropdownMenu = ({
  ...passthrough
}: DropdownMenuPrimitive.DropdownMenuProps) => {
  return <DropdownMenuPrimitive.Root {...passthrough} />;
};

export const DropdownMenuTrigger = ({
  ...passthrough
}: DropdownMenuPrimitive.DropdownMenuTriggerProps) => {
  return <DropdownMenuPrimitive.Trigger {...passthrough} />;
};

export const DropdownMenuPortal = ({
  ...passthrough
}: DropdownMenuPrimitive.DropdownMenuPortalProps) => {
  return <DropdownMenuPrimitive.Portal {...passthrough} />;
};

export const DropdownMenuContent = ({
  className,
  ...passthrough
}: DropdownMenuPrimitive.DropdownMenuContentProps) => {
  return (
    <Surface shadow asChild className={twMerge("p-2", className)}>
      <DropdownMenuPrimitive.Content {...passthrough} />
    </Surface>
  );
};
