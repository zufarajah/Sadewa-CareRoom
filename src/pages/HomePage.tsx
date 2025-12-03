import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-100 to-emerald-50">
      <div className="flex flex-col items-center justify-center px-4 py-20">
        {/* ICON */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 text-3xl">
          🏥
        </div>

        {/* TITLE */}
        <h1 className="text-center text-3xl md:text-4xl font-bold text-emerald-700">
          Ketersediaan Kamar Rawat Inap
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-3 text-center text-sm md:text-base text-slate-700 max-w-md">
          Cek ketersediaan kamar rawat inap Ibu dan Anak di RSKIA Sadewa secara real-time.
        </p>

        {/* CTA BUTTON */}
        <Link
          to="/kamar"
          className="mt-8 rounded-lg bg-emerald-600 px-10 py-3 text-base font-bold text-white shadow-md hover:bg-emerald-700 transition-all"
        >
          Lihat Ketersediaan Kamar
        </Link>

        {/* INFO CARD */}
        <div className="mt-12 w-full max-w-xl rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="text-center text-xl md:text-2xl font-bold text-emerald-700">
            Informasi Rumah Sakit
          </h2>

          <div className="mt-6 space-y-4">
            {/* ALAMAT */}
            <div className="flex gap-3">
              <div className="text-2xl text-emerald-600 flex-shrink-0">📍</div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">Alamat</h3>
                <p className="mt-0.5 text-sm text-slate-700">
                  Jl. Babarsari TB 16 No 13B, Sleman
                </p>
              </div>
            </div>

            {/* TELEPON */}
            <div className="flex gap-3">
              <div className="text-2xl text-emerald-600 flex-shrink-0">📞</div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">Telepon</h3>
                <p className="mt-0.5 text-sm text-slate-700">
                  0274 489118 / 485610
                </p>
              </div>
            </div>
          </div>

          {/* WHATSAPP BUTTON */}
          <a
            href="https://wa.me/6285964422140"
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-400 px-4 py-3 text-sm md:text-base font-bold text-emerald-800 hover:bg-yellow-500 transition-all"
          >
            💬 Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
