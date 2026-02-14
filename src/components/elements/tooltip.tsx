import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";
import { twMerge } from "tailwind-merge";
import { commonSurface } from "../common";

type TooltipProviderProps = React.ComponentProps<
  typeof TooltipPrimitive.Provider
>;

export const TooltipProvider = ({ ...passthrough }: TooltipProviderProps) => {
  return <TooltipPrimitive.Provider {...passthrough} />;
};

type TooltipProps = React.ComponentProps<typeof TooltipPrimitive.Root>;

export const Tooltip = ({ ...passthrough }: TooltipProps) => {
  return <TooltipPrimitive.Root {...passthrough} />;
};

type TooltipTriggerProps = React.ComponentProps<
  typeof TooltipPrimitive.Trigger
>;

export const TooltipTrigger = ({ ...passthrough }: TooltipTriggerProps) => {
  return <TooltipPrimitive.Trigger {...passthrough} />;
};

type TooltipContentProps = React.ComponentProps<
  typeof TooltipPrimitive.Content
>;

export const TooltipContent = ({
  className,
  side,
  sideOffset,
  ...passthrough
}: TooltipContentProps) => {
  return (
    <TooltipPrimitive.Content
      {...passthrough}
      side={side ?? "bottom"}
      sideOffset={sideOffset ?? 6}
      className={twMerge(
        commonSurface,
        "shadow-sm rounded-md w-max px-2 py-1 text-center text-xs",
        "animate-in fade-in zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-95",
        className,
      )}
    />
  );
};
