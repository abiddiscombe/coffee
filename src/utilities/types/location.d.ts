import { type Feature, type Point } from "geojson";

export type LocationFeature = Feature<
  Point,
  {
    id: string;
    name: string;
    metadata: {
      tags: string[];
    };
  }
>;

export type LocationFeatureExtended = Feature<
  Point,
  {
    id: string;
    name: string;
    metadata: {
      tags: string[];
      summary?: string;
      website?: {
        href: string;
        label: string;
      };
    };
  }
>;
