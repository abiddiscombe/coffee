import { HeaderInfo } from "./header-info";

export const Header = () => {
  return (
    <header className="bg-white border-b border-b-base-200 shadow-sm z-10">
      <div className="min-h-12 px-4 flex items-center gap-2">
        <h1 className="grow font-normal text-base-800">
          <span className="font-semibold text-base-950">Southampton</span>{" "}
          Coffee Map
        </h1>
        <HeaderInfo />
      </div>
    </header>
  );
};
