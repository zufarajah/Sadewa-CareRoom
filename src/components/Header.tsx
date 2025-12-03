import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navBase =
    "rounded-full px-3 py-1 text-xs font-medium transition-colors";

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `${navBase} ${
      isActive
        ? "bg-white text-[#008F4A]"
        : "bg-white/10 text-white hover:bg-white/20"
    }`;

  return (
    <header className="bg-[#008F4A] shadow-md">
      <div className="mx-auto flex w-full max-w-md items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white shadow">
            <img
              src="/logo_rskia_sadewa-removebg.png"
              alt="RSKIA Sadewa"
              className="h-7 w-7 object-contain"
            />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold text-white">
              RSKIA SADEWA
            </div>
            <div className="text-[10px] text-emerald-100">
              Pusat Bayi Tabung &amp; Layanan Ibu Anak
            </div>
          </div>
        </Link>

        <nav className="flex items-center gap-2">
          <NavLink to="/" className={navClass}>
            Beranda
          </NavLink>
          <NavLink to="/kamar" className={navClass}>
            Kamar
          </NavLink>
          <NavLink to="/admin" className={navClass}>
            Admin
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
