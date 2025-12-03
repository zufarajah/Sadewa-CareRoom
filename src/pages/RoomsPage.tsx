import { useMemo, useState } from "react";
import type { Room } from "../data/rooms";
import RoomCard from "../components/RoomCard";

// Biar aman, kita definisikan tipe lokal saja
type StatusFilter = "all" | "tersedia" | "terisi" | "dibersihkan";
type CategoryFilter = "all" | "ibu" | "anak";

type Props = {
  rooms: Room[];
};

export default function RoomsPage({ rooms }: Props) {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");

  // Hitung summary
  const summary = useMemo(() => {
    const counts = {
      tersedia: 0,
      terisi: 0,
      dibersihkan: 0,
    };

    rooms.forEach((r: any) => {
      if (r.status === "tersedia") counts.tersedia++;
      else if (r.status === "terisi") counts.terisi++;
      else if (r.status === "dibersihkan") counts.dibersihkan++;
    });

    return counts;
  }, [rooms]);

  // Filter kamar
  const filteredRooms = useMemo(
    () =>
      rooms.filter((room: any) => {
        if (statusFilter !== "all" && room.status !== statusFilter) return false;
        if (
          categoryFilter !== "all" &&
          room.category !== categoryFilter
        )
          return false;
        return true;
      }),
    [rooms, statusFilter, categoryFilter]
  );

  // Kelompok per kategori & kelas
  const groupedByCategory = useMemo(() => {
    const result: {
      ibu: Record<string, Room[]>;
      anak: Record<string, Room[]>;
    } = { ibu: {}, anak: {} };

    filteredRooms.forEach((room: any) => {
      const cat: "ibu" | "anak" = room.category;
      if (!result[cat][room.kelas]) {
        result[cat][room.kelas] = [];
      }
      result[cat][room.kelas].push(room);
    });

    return result;
  }, [filteredRooms]);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* PAGE HEADER */}
        <h1 className="text-3xl font-bold text-emerald-700 mb-2">
          Ketersediaan Kamar
        </h1>
        <p className="text-slate-600 text-sm mb-6">
          Informasi status kamar rawat inap Ibu dan Anak
        </p>

        {/* STATUS SUMMARY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="rounded-lg bg-emerald-50 border-l-4 border-emerald-600 p-4">
            <p className="text-emerald-700 text-sm font-semibold">Tersedia</p>
            <p className="text-emerald-700 text-3xl font-bold mt-1">
              {summary.tersedia}
            </p>
          </div>
          <div className="rounded-lg bg-rose-50 border-l-4 border-rose-600 p-4">
            <p className="text-rose-700 text-sm font-semibold">Terisi</p>
            <p className="text-rose-700 text-3xl font-bold mt-1">
              {summary.terisi}
            </p>
          </div>
          <div className="rounded-lg bg-amber-50 border-l-4 border-amber-600 p-4">
            <p className="text-amber-700 text-sm font-semibold">Dibersihkan</p>
            <p className="text-amber-700 text-3xl font-bold mt-1">
              {summary.dibersihkan}
            </p>
          </div>
        </div>

        {/* FILTER SECTION */}
        <div className="mb-8 bg-white border border-slate-200 rounded-lg p-5">
          <div className="flex items-center gap-2 font-bold text-slate-900 mb-4">
            <span>🧹</span>
            Filter Kamar
          </div>

          <div className="space-y-4">
            {/* STATUS FILTER */}
            <div>
              <p className="font-semibold text-slate-900 text-sm mb-2">Status</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Semua", value: "all" as StatusFilter },
                  { label: "Tersedia", value: "tersedia" as StatusFilter },
                  { label: "Terisi", value: "terisi" as StatusFilter },
                  { label: "Dibersihkan", value: "dibersihkan" as StatusFilter },
                ].map((s) => (
                  <button
                    key={s.label}
                    onClick={() => setStatusFilter(s.value)}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                      statusFilter === s.value
                        ? "bg-emerald-600 text-white"
                        : "bg-white border border-slate-300 text-slate-700 hover:border-slate-400"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* KATEGORI FILTER */}
            <div>
              <p className="font-semibold text-slate-900 text-sm mb-2">Kategori</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Semua", value: "all" as CategoryFilter },
                  { label: "Ibu", value: "ibu" as CategoryFilter },
                  { label: "Anak", value: "anak" as CategoryFilter },
                ].map((c) => (
                  <button
                    key={c.label}
                    onClick={() => setCategoryFilter(c.value)}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                      categoryFilter === c.value
                        ? "bg-emerald-600 text-white"
                        : "bg-white border border-slate-300 text-slate-700 hover:border-slate-400"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ROOMS LIST */}
        <div className="space-y-8">
          {/* KAMAR IBU */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              Kamar Ibu
            </h2>

            {Object.keys(groupedByCategory.ibu).length === 0 ? (
              <p className="text-slate-600 text-center py-6">
                Tidak ada kamar yang sesuai filter
              </p>
            ) : (
              <div className="space-y-6">
                {Object.entries(groupedByCategory.ibu).map(([kelas, list]) => (
                  <div key={kelas}>
                    <h3 className="text-sm font-semibold text-slate-800 mb-3">
                      {kelas}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {list.map((room) => (
                        <RoomCard key={room.id} room={room} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* KAMAR ANAK */}
          <section>
            <h2 className="text-2xl font-bold text-emerald-700 mb-4">
              Kamar Anak
            </h2>

            {Object.keys(groupedByCategory.anak).length === 0 ? (
              <p className="text-slate-600 text-center py-6">
                Tidak ada kamar yang sesuai filter
              </p>
            ) : (
              <div className="space-y-6">
                {Object.entries(groupedByCategory.anak).map(([kelas, list]) => (
                  <div key={kelas}>
                    <h3 className="text-sm font-semibold text-slate-800 mb-3">
                      {kelas}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {list.map((room) => (
                        <RoomCard key={room.id} room={room} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
