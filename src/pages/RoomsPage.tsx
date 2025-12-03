import { useMemo, useState } from "react";
import type { Room, RoomCategory, RoomStatus } from "../data/rooms";
import RoomCard from "../components/RoomCard";
import RoomFilterTabs from "../components/RoomFilterTabs";
import type { RoomFilterValue } from "../components/RoomFilterTabs";

type Props = {
  rooms: Room[];
};

export default function RoomsPage({ rooms }: Props) {
  const [filter, setFilter] = useState<RoomFilterValue>("all");
  const [statusFilter, setStatusFilter] = useState<RoomStatus | "all">("all");

  const filteredRooms = useMemo(
    () =>
      rooms.filter((room) => {
        if (filter !== "all" && room.category !== (filter as RoomCategory))
          return false;
        if (statusFilter !== "all" && room.status !== statusFilter) return false;
        return true;
      }),
    [rooms, filter, statusFilter]
  );

  return (
    <main className="min-h-[calc(100vh-56px)] bg-gradient-to-b from-emerald-200 via-emerald-100 to-white px-4 py-4">
      <div className="mx-auto flex w-full max-w-md flex-col">
        <div className="mb-4 mt-2 text-center">
          <h1 className="text-xl font-semibold text-slate-900">
            Informasi Kamar
          </h1>
          <p className="mt-1 text-[12px] text-slate-600">
            Pilih kategori kamar dan lihat status ketersediaan secara cepat.
          </p>
        </div>

        {/* Kartu utama */}
        <div className="flex-1 rounded-[32px] bg-white p-4 shadow-xl">
          {/* Filter */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-center">
              <RoomFilterTabs value={filter} onChange={setFilter} />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 text-[11px]">
              <span className="text-slate-600">Status:</span>
              {[
                { label: "Semua", value: "all" as const },
                { label: "Tersedia", value: "tersedia" as const },
                { label: "Terisi", value: "terisi" as const },
                { label: "Dibersihkan", value: "dibersihkan" as const },
              ].map((s) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => setStatusFilter(s.value)}
                  className={`rounded-full px-3 py-1 font-medium ${
                    statusFilter === s.value
                      ? "bg-[#F6D54A] text-slate-900"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Daftar kamar */}
          <div className="mt-4 space-y-3">
            {filteredRooms.length === 0 && (
              <div className="rounded-2xl bg-slate-50 p-4 text-center text-sm text-slate-600">
                Tidak ada kamar yang sesuai dengan filter.
              </div>
            )}

            {filteredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>

        <p className="mt-3 text-center text-[11px] text-slate-500">
          Untuk kondisi terbaru, silakan konfirmasi ke petugas pendaftaran atau
          humas RSKIA Sadewa.
        </p>
      </div>
    </main>
  );
}
