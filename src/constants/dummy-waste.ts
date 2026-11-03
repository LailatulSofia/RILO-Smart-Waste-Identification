//src/constants/dummy-waste.ts
import type { WasteIdentification } from '@/types/rilo';

export const dummyWaste: WasteIdentification = {
  id: '1',
  name: 'Botol Plastik',
  material: 'PET',
  category: 'Daur Ulang',
  description: 'Botol minuman berbahan plastik PET.',
  sortingGuide: 'Kosongkan dan bilas botol sebelum disetorkan.',
  identifiedAt: new Date().toISOString(),
};