import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { twMerge } from "tailwind-merge";

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
    <DropdownMenuPrimitive.Content
      {...passthrough}
      className={twMerge(
        "bg-white border border-base-200 rounded-lg p-2 shadow-lg ",
        className,
      )}
    />
  );
};
