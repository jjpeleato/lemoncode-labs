export type LabLevel = "basic" | "extra" | "advanced";

export interface Lab {
  title: string;
  level?: LabLevel;
  url: string;
}

export interface LabModule {
  id: number;
  title: string;
  labs: Lab[];
}
