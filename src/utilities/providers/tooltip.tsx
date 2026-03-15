import { TooltipProvider as _TooltipProvider } from "@/components/elements/tooltip";

export const TooltipProvider = ({ children }: React.ComponentProps<"div">) => {
  return <_TooltipProvider>{children}</_TooltipProvider>;
};
