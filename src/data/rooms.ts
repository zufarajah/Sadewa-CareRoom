export type RoomCategory = "ibu" | "anak";
export type RoomStatus = "tersedia" | "terisi" | "dibersihkan";

export interface Room {
  id: number;
  name: string;
  kelas: string;
  category: RoomCategory;
  status: RoomStatus;
  facilities?: string;
}

export const initialRooms: Room[] = [
  // Kamar Ibu
  {
    id: 1,
    name: "Bodronoyo",
    kelas: "VVIP",
    category: "ibu",
    status: "tersedia",
    facilities: "AC, TV, Sofa, Balkon, Kulkas, Dispenser, Kamar mandi dalam",
  },
  {
    id: 2,
    name: "Arimbi",
    kelas: "VIP",
    category: "ibu",
    status: "terisi",
    facilities: "AC, TV, Sofa, Kulkas, Kamar mandi dalam",
  },
  {
    id: 3,
    name: "Shinta",
    kelas: "VIP",
    category: "ibu",
    status: "tersedia",
    facilities: "AC, TV, Sofa, Kulkas, Kamar mandi dalam",
  },
  {
    id: 4,
    name: "Wisnu",
    kelas: "Kelas 1 Utama",
    category: "ibu",
    status: "tersedia",
    facilities: "AC, TV, Sofa, Kamar mandi dalam",
  },
  {
    id: 5,
    name: "Sembdoro",
    kelas: "Kelas 2",
    category: "ibu",
    status: "terisi",
    facilities: "AC, 2 bed, Kamar mandi dalam",
  },
  {
    id: 6,
    name: "Kresna",
    kelas: "Kelas 2",
    category: "ibu",
    status: "tersedia",
    facilities: "AC, 2 bed, Kamar mandi dalam",
  },
  {
    id: 7,
    name: "Semar",
    kelas: "Kelas 3",
    category: "ibu",
    status: "tersedia",
    facilities: "AC, 3–5 bed, Kamar mandi dalam",
  },
  {
    id: 8,
    name: "Bima",
    kelas: "Kelas 3",
    category: "ibu",
    status: "terisi",
    facilities: "AC, 3–5 bed, Kamar mandi dalam",
  },
  {
    id: 9,
    name: "Wisanggeni",
    kelas: "Kelas 3",
    category: "ibu",
    status: "dibersihkan",
    facilities: "AC, 3–5 bed, Kamar mandi dalam",
  },
  {
    id: 10,
    name: "Abimanyu",
    kelas: "Kelas 3",
    category: "ibu",
    status: "tersedia",
    facilities: "AC, 3–5 bed, Kamar mandi dalam",
  },

  // Kamar Anak
  {
    id: 11,
    name: "Rama 1",
    kelas: "VIP Anak",
    category: "anak",
    status: "tersedia",
    facilities: "AC, TV, Sofa bed, Kamar mandi dalam",
  },
  {
    id: 12,
    name: "Rama 2",
    kelas: "VIP Anak",
    category: "anak",
    status: "terisi",
    facilities: "AC, TV, Sofa bed, Kamar mandi dalam",
  },
  {
    id: 13,
    name: "Rama 3",
    kelas: "VIP Anak",
    category: "anak",
    status: "tersedia",
    facilities: "AC, TV, Sofa bed, Kamar mandi dalam",
  },
  {
    id: 14,
    name: "Rama 4",
    kelas: "Kelas 1 Anak",
    category: "anak",
    status: "tersedia",
    facilities: "AC, Kulkas, 1–2 bed, Kamar mandi dalam",
  },
  {
    id: 15,
    name: "Rama 5",
    kelas: "Kelas 1 Anak",
    category: "anak",
    status: "terisi",
    facilities: "AC, Kulkas, 1–2 bed, Kamar mandi dalam",
  },
  {
    id: 16,
    name: "Rama 6",
    kelas: "Kelas 1 Anak",
    category: "anak",
    status: "tersedia",
    facilities: "AC, Kulkas, 1–2 bed, Kamar mandi dalam",
  },
  {
    id: 17,
    name: "Nakula",
    kelas: "Kelas 2 Anak",
    category: "anak",
    status: "tersedia",
    facilities: "AC, 2 bed, Kamar mandi dalam",
  },
  {
    id: 18,
    name: "Sadewa",
    kelas: "Kelas 3 Anak",
    category: "anak",
    status: "terisi",
    facilities: "AC, 3–4 bed, Kamar mandi dalam",
  },
];
