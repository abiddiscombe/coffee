export interface CmsDataEntry {
  id: string;
  name: string;
  visible: boolean;
  metadata_tags?: string[];
  metadata_website?: string;
  metadata_summary?: string;
  location: {
    coordinates: [number, number];
  };
}

export interface CmsResultSingle {
  data: CmsDataEntry;
}

export interface CmsResultMultiple {
  data: CmsDataEntry[];
}
