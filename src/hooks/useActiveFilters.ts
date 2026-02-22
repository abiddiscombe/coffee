import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";

const key = "filters";

export const useActiveFilters = (): [string[], (id: string) => void] => {
  const [activeFilters, setActiveFilters] = useQueryState(
    key,
    parseAsArrayOf(parseAsString).withDefault([]),
  );

  const removeFilter = (filterId: string) => {
    setActiveFilters((old) => old.filter((id) => id !== filterId));
  };

  const appendFilter = (filterId: string) => {
    setActiveFilters((old) => old.concat(filterId));
  };

  const toggleFilter = (id: string) => {
    activeFilters.includes(id) ? removeFilter(id) : appendFilter(id);
  };

  return [activeFilters, toggleFilter];
};
