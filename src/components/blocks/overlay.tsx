import { OverlayHeader } from "./overlay-header";
import { OverlayPanel } from "./overlay-panel";

export const Overlay: React.FC = () => {
  return (
    <div className="p-0 sm:p-4 sm:max-w-sm pointer-events-none z-20 flex gap-2 flex-col justify-between sm:justify-start *:pointer-events-auto">
      <OverlayHeader />
      <OverlayPanel />
    </div>
  );
};
