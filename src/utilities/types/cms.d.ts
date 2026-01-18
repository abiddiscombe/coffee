export interface CmsDataEntry {
  id: string;
  name: string;
  status: "draft" | "archived" | "published";
  metadata_website?: string;
  metadata_address?: string;
  metadata_summary?: string;
  geometry: {
    coordinates: [number, number];
  };
  tags: string[];
}

export interface CmsResultSingle {
  data: CmsDataEntry;
}

export interface CmsResultMultiple {
  data: CmsDataEntry[];
}
