"use client";

import { PLANT_NAMES, PlantName } from "@/lib/presets";

type Props = {
  selected: PlantName | null;
  onChange: (plant: PlantName) => void;
};

export default function PlantSelector({ selected, onChange }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-green-100 p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-green-900">식물 선택</h2>
        <div className="flex items-center gap-2">
          <select
            value={selected ?? ""}
            onChange={(e) => onChange(e.target.value as PlantName)}
            className="text-sm border border-green-200 rounded-lg px-3 py-1.5 bg-green-50 text-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
          >
            <option value="" disabled>선택하세요</option>
            {PLANT_NAMES.map((plant) => (
              <option key={plant} value={plant}>{plant}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
