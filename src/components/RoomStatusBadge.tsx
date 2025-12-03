import type { RoomStatus } from "../data/rooms";

interface Props {
  status: RoomStatus;
}

const RoomStatusBadge = ({ status }: Props) => {
  let bg = "";
  let text = "";
  let label = "";

  if (status === "tersedia") {
    bg = "bg-emerald-100";
    text = "text-emerald-700";
    label = "Tersedia";
  } else if (status === "terisi") {
    bg = "bg-rose-100";
    text = "text-rose-700";
    label = "Terisi";
  } else {
    bg = "bg-amber-100";
    text = "text-amber-800";
    label = "Dibersihkan";
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold ${bg} ${text}`}
    >
      {label}
    </span>
  );
};

export default RoomStatusBadge;
