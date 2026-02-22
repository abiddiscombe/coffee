import { filters } from "@/utilities/filters";
import { useMemo } from "react";
import { Icon } from "../elements/icon";

export const OverlayPanelTags = (p: { tags: string[] }) => {
  const matchedTags = useMemo(() => {
    return p.tags
      .map((tag) => {
        return filters.find((filterEntry) => filterEntry.id === tag) ?? [];
      })
      .flat();
  }, [p.tags]);

  return (
    <div className="flex items-center gap-2">
      {matchedTags.map((tag) => (
        <div
          key={tag.id}
          className="p-1.5 rounded-full bg-accent-100 text-accent-700 block"
        >
          <Icon>{tag.icon}</Icon>
        </div>
      ))}
    </div>
  );
};
