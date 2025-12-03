import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="flex min-h-[calc(100vh-56px)] justify-center bg-gradient-to-b from-emerald-200 via-emerald-100 to-white px-4 py-6">
      <div className="flex w-full max-w-sm flex-col items-center">
        {/* Logo + Judul App */}
        <div className="mt-4 flex flex-col items-center gap-3">
          <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/80 shadow-md">
            <img
              src="/logo_rskia_sadewa-removebg.png"
              alt="RSKIA SADEWA"
              className="h-20 w-20 object-contain"
            />
          </div>
          <h1 className="text-xl font-semibold text-slate-900">
            Sadewa Beds
          </h1>
          <p className="max-w-xs text-center text-[13px] text-slate-600">
            Cek ketersediaan kamar rawat inap Ibu &amp; Anak di RSKIA Sadewa
            dengan tampilan sederhana seperti aplikasi mobile.
          </p>
        </div>

        {/* Kartu putih besar seperti form login */}
        <div className="mt-6 w-full rounded-[32px] bg-white p-5 shadow-xl">
          <p className="text-[13px] text-slate-700">
            Silakan masuk ke halaman informasi kamar untuk melihat status
            ketersediaan kamar berdasarkan kelas dan kategori pasien.
          </p>

          <div className="mt-5">
            <Link
              to="/kamar"
              className="flex h-11 items-center justify-center rounded-full bg-[#008F4A] text-sm font-semibold text-white shadow-md hover:bg-[#00713a]"
            >
              Lihat Ketersediaan Kamar
            </Link>
          </div>

          <p className="mt-4 text-center text-[11px] text-slate-500">
            Aplikasi ini adalah prototipe dan tidak terhubung langsung dengan
            sistem resmi RSKIA Sadewa.
          </p>
        </div>
      </div>
    </main>
  );
}
