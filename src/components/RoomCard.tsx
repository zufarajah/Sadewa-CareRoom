import type { Room } from "../data/rooms";
import RoomStatusBadge from "./RoomStatusBadge";

interface Props {
  room: Room;
}

const RoomCard = ({ room }: Props) => {
  const categoryLabel = room.category === "ibu" ? "Ibu" : "Anak";

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3">
        {/* LEFT SIDE */}
        <div className="flex items-start gap-3 flex-1">
          <div className="text-2xl text-emerald-600">👤</div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-slate-900">
              {room.name}
            </h3>
          </div>
        </div>

        {/* RIGHT SIDE - Status */}
        <div className="flex-shrink-0">
          <RoomStatusBadge status={room.status} />
        </div>
      </div>

      {/* INFO */}
      <div className="mt-3 space-y-1 text-sm text-slate-700">
        <div className="flex justify-between">
          <span className="text-slate-600">Kelas:</span>
          <span className="font-medium text-slate-900">{room.kelas}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-600">Kategori:</span>
          <span className="font-medium text-slate-900">{categoryLabel}</span>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
