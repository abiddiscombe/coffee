import { LOCATION_FILTERS } from "@/utilities/constants";
import { Icon } from "../elements/icon";

export const OverlayPanelTags = (p: { tags: string[] }) => {
  return (
    <div className="mt-8">
      {p.tags
        .map((tag) => {
          const matchedTag = LOCATION_FILTERS.find(
            (filterEntry) => filterEntry.id === tag,
          );
          return matchedTag ? (
            <>
              <Icon>
                <matchedTag.icon />
              </Icon>
              {matchedTag.label}
            </>
          ) : null;
        })
        .flat()}
    </div>
  );
};
