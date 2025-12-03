import type { RoomStatus } from "../data/rooms";

interface Props {
  status: RoomStatus;
}

const RoomStatusBadge = ({ status }: Props) => {
  let bg = "";
  let text = "";

  if (status === "tersedia") {
    bg = "bg-emerald-100";
    text = "text-emerald-700";
  } else if (status === "terisi") {
    bg = "bg-red-100";
    text = "text-red-700";
  } else {
    bg = "bg-amber-100";
    text = "text-amber-700";
  }

  return (
    <span
      className={`inline-flex items-center rounded-md px-3 py-1 text-xs font-bold ${bg} ${text}`}
    >
      {status === "tersedia"
        ? "✓ Tersedia"
        : status === "terisi"
        ? "✕ Terisi"
        : "🧹 Dibersihkan"}
    </span>
  );
};

export default RoomStatusBadge;
