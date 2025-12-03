import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo + text */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 flex-shrink-0">
            <span className="text-lg text-emerald-600">🏥</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-emerald-700">
              RSKIA Sadewa
            </div>
            <div className="text-xs text-slate-500">
              Ketersediaan Kamar
            </div>
          </div>
        </Link>

        {/* Tombol admin */}
        <Link
          to="/admin"
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 flex-shrink-0"
        >
          Admin
        </Link>
      </div>
    </header>
  );
};

export default Header;
