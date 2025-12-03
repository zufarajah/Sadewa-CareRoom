import { useLocation, Link } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  const labels: Record<string, string> = {
    kamar: "Ketersediaan Kamar",
    admin: "Admin Kamar",
  };

  if (location.pathname === "/") return null;

  return (
    <div className="bg-[#F6D54A] text-slate-900">
      <div className="mx-auto flex w-full max-w-md items-center gap-1 px-4 py-2 text-[11px] font-medium">
        <Link to="/" className="hover:underline">
          Beranda
        </Link>
        {segments.map((seg, i) => (
          <div key={i} className="flex items-center gap-1">
            <span>/</span>
            <span>{labels[seg] ?? seg}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
