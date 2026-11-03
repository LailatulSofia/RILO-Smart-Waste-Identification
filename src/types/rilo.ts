//src/types/rilo.ts
export type WasteCategory =
  | 'Organik'
  | 'Daur Ulang'
  | 'Residu'
  | 'B3 dan Khusus';

export interface WasteIdentification {
  id: string;
  name: string;
  material: string;
  category: WasteCategory;
  description: string;
  sortingGuide: string;
  identifiedAt: string;
}