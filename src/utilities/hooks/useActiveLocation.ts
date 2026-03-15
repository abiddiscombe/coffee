import { useQueryState } from "nuqs";

const key = "location";

export const useActiveLocation = (): [
  location: string | null,
  setLocation: (id?: string) => void,
] => {
  const [location, _setLocation] = useQueryState(key);

  const setLocation = (id?: string) => {
    _setLocation(id ?? null);
  };

  return [location, setLocation];
};
