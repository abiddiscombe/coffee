import { Button } from "@/components/elements/button";
import { Typography } from "@/components/elements/typography";

export default function OverlayPanelError(p: {
  handleRetry: VoidFunction;
  handleCancel: VoidFunction;
}) {
  return (
    <div className="max-w-xs">
      <Typography variant="h2">Looks like we need more coffee.</Typography>
      <Typography variant="body">
        Sorry, we couldn&apos;t fetch information about this coffee shop.
      </Typography>
      <div className="flex items-center gap-2">
        <Button variant="solid" onClick={p.handleRetry}>
          Retry
        </Button>
        <Button variant="ghost" onClick={p.handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
