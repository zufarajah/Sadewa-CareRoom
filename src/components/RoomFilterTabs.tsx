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
    <div className="inline-flex gap-1 rounded-full bg-slate-100 p-1">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          onClick={() => onChange(tab.value)}
          className={`rounded-full px-3 py-1 text-[11px] font-medium transition ${
            value === tab.value
              ? "bg-[#008F4A] text-white"
              : "text-slate-700 hover:bg-slate-200"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
