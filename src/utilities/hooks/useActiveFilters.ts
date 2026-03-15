import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";

const key = "filters";

export const useActiveFilters = (): [string[], (ids: string[]) => void] => {
  const [activeFilters, setActiveFilters] = useQueryState(
    key,
    parseAsArrayOf(parseAsString).withDefault([]),
  );

  const refreshFilters = (ids: string[]) => {
    setActiveFilters(ids);
  };

  return [activeFilters, refreshFilters];
};
