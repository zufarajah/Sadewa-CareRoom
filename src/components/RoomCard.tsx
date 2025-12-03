import type { Room } from "../data/rooms";
import RoomStatusBadge from "./RoomStatusBadge";

interface Props {
  room: Room;
}
const RoomCard = ({ room }: Props) => {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{room.name}</h3>
          <p className="text-sm text-slate-600 mt-1">
            {room.kelas} • {room.category === "ibu" ? "Kamar Ibu" : "Kamar Anak"}
          </p>
        </div>
        <RoomStatusBadge status={room.status} />
      </div>
      
      {room.facilities && (
        <div className="pt-4 border-t border-slate-200">
          <p className="text-xs font-bold text-slate-700 mb-2">FASILITAS</p>
          <p className="text-sm text-slate-600">
            {room.facilities}
          </p>
        </div>
      )}
    </div>
  );
};

export default RoomCard;
