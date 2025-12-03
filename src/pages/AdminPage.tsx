import { useState } from "react";
import type { FormEvent } from "react";
import type { Room, RoomCategory, RoomStatus } from "../data/rooms";

type Props = {
  rooms: Room[];
  setRooms: React.Dispatch<React.SetStateAction<Room[]>>;
};

export default function AdminPage({ rooms, setRooms }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const [newName, setNewName] = useState("");
  const [newKelas, setNewKelas] = useState("");
  const [newCategory, setNewCategory] = useState<RoomCategory>("ibu");

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (user === "admin" && pass === "admin123") {
      setIsLoggedIn(true);
    } else {
      alert("Username atau password salah.");
    }
  };

  const handleStatusChange = (id: number, status: RoomStatus) => {
    setRooms((prev) =>
      prev.map((room) =>
        room.id === id
          ? {
              ...room,
              status,
            }
          : room
      )
    );
  };

  const handleAddRoom = (e: FormEvent) => {
    e.preventDefault();
    if (!newName || !newKelas) return;

    setRooms((prev) => [
      ...prev,
      {
        id: prev.length ? prev[prev.length - 1].id + 1 : 1,
        name: newName,
        kelas: newKelas,
        category: newCategory,
        status: "tersedia",
      },
    ]);

    setNewName("");
    setNewKelas("");
    setNewCategory("ibu");
  };

  if (!isLoggedIn) {
    return (
      <main className="flex min-h-[calc(100vh-56px)] items-center justify-center bg-gradient-to-b from-emerald-200 via-emerald-100 to-white px-4 py-6">
        <div className="w-full max-w-xs rounded-3xl bg-white p-5 shadow-xl">
          <h1 className="text-lg font-semibold text-slate-900">
            Halaman Admin Kamar
          </h1>
          <p className="mt-1 text-[12px] text-slate-600">
            Masuk dengan akun demo. Data tidak tersimpan permanen dan hanya
            untuk keperluan prototipe.
          </p>
          <form onSubmit={handleLogin} className="mt-4 space-y-3 text-sm">
            <div>
              <label className="block text-[12px] text-slate-700">
                Username
              </label>
              <input
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#008F4A]"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="admin"
              />
            </div>
            <div>
              <label className="block text-[12px] text-slate-700">
                Password
              </label>
              <input
                type="password"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#008F4A]"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="admin123"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-[#008F4A] px-4 py-2 text-sm font-semibold text-white"
            >
              Masuk
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[calc(100vh-56px)] bg-gradient-to-b from-emerald-200 via-emerald-100 to-white px-4 py-4">
      <div className="mx-auto w-full max-w-md">
        <h1 className="text-lg font-semibold text-slate-900">
          Manajemen Kamar (Demo)
        </h1>
        <p className="text-[12px] text-slate-600">
          Perubahan hanya untuk prototipe dan akan hilang jika halaman di-refresh.
        </p>

        <section className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">
            Tambah Kamar Baru
          </h2>
          <form
            onSubmit={handleAddRoom}
            className="mt-3 grid gap-3 text-[13px] sm:grid-cols-4"
          >
            <div className="sm:col-span-2">
              <label className="block text-[11px] text-slate-700">
                Nama Kamar
              </label>
              <input
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#008F4A]"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Misal: Kamar Baru 1"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-700">
                Kelas Kamar
              </label>
              <input
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#008F4A]"
                value={newKelas}
                onChange={(e) => setNewKelas(e.target.value)}
                placeholder="Misal: VIP"
              />
            </div>
            <div>
              <label className="block text-[11px] text-slate-700">
                Kategori
              </label>
              <select
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#008F4A]"
                value={newCategory}
                onChange={(e) =>
                  setNewCategory(e.target.value as RoomCategory)
                }
              >
                <option value="ibu">Kamar Ibu</option>
                <option value="anak">Kamar Anak</option>
              </select>
            </div>
            <div className="sm:col-span-4">
              <button
                type="submit"
                className="rounded-full bg-[#F6D54A] px-4 py-2 text-sm font-semibold text-slate-900"
              >
                Simpan Kamar
              </button>
            </div>
          </form>
        </section>

        <section className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-900">Daftar Kamar</h2>
          <div className="mt-3 space-y-2 text-[12px]">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="flex flex-col gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="text-sm font-semibold">{room.name}</div>
                  <div className="text-[11px] text-slate-600">
                    {room.kelas} •{" "}
                    {room.category === "ibu" ? "Kamar Ibu" : "Kamar Anak"}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-600">Status:</span>
                  <select
                    className="rounded-full border border-slate-200 px-3 py-1 text-[11px] outline-none focus:border-[#008F4A]"
                    value={room.status}
                    onChange={(e) =>
                      handleStatusChange(room.id, e.target.value as RoomStatus)
                    }
                  >
                    <option value="tersedia">Tersedia</option>
                    <option value="terisi">Terisi</option>
                    <option value="dibersihkan">Dibersihkan</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
