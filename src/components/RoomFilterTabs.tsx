export type RoomFilterValue = "all" | "ibu" | "anak";

type Props = {
  value: RoomFilterValue;
  onChange: (value: RoomFilterValue) => void;
};

export default function RoomFilterTabs({ value, onChange }: Props) {
  const tabs: { label: string; value: RoomFilterValue }[] = [
    { label: "Semua", value: "all" },
    { label: "Kamar Ibu", value: "ibu" },
    { label: "Kamar Anak", value: "anak" },
  ];

  return (
    <div className="flex gap-2 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          onClick={() => onChange(tab.value)}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
            value === tab.value
              ? "bg-[#008F4A] text-white"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
