"use client";

import { SOIL_PRESETS } from "@/lib/presets";

type SoilField = {
  key: string;
  label: string;
  unit: string;
};

const SOIL_FIELDS: SoilField[] = [
  { key: "highEC", label: "상단 토양 EC", unit: "dS/m" },
  { key: "highPH", label: "상단 토양 PH", unit: "pH" },
  { key: "highSoilHumi", label: "상단 토양 습도", unit: "%" },
  { key: "lowSoilEC", label: "하단 토양 EC", unit: "dS/m" },
  { key: "lowSoilHumi", label: "하단 토양 습도", unit: "%" },
  { key: "lowSoilPH", label: "하단 토양 PH", unit: "pH" },
];

type Props = {
  values: Record<string, number | string>;
  onChange: (key: string, value: string) => void;
  onPreset: (preset: (typeof SOIL_PRESETS)[0]["values"]) => void;
};

export default function SoilInput({ values, onChange, onPreset }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-green-100 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-base font-semibold text-green-900">토양 정보</h2>
        <div className="flex items-center gap-2">
          <span className="text-xs text-green-600 font-medium">프리셋</span>
          <select
            className="text-sm border border-green-200 rounded-lg px-3 py-1.5 bg-green-50 text-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
            defaultValue=""
            onChange={(e) => {
              const preset = SOIL_PRESETS.find((p) => p.label === e.target.value);
              if (preset) onPreset(preset.values);
            }}
          >
            <option value="" disabled>
              선택하세요
            </option>
            {SOIL_PRESETS.map((p) => (
              <option key={p.label} value={p.label}>
                {p.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {SOIL_FIELDS.map((field) => (
          <div key={field.key}>
            <label className="block text-xs text-green-700 mb-1 font-medium">
              {field.label}
            </label>
            <div className="relative">
              <input
                type="number"
                step="0.01"
                value={values[field.key] ?? ""}
                onChange={(e) => onChange(field.key, e.target.value)}
                placeholder="0.00"
                className="w-full border border-green-200 rounded-lg px-3 py-2 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-green-900 placeholder-green-300"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-green-400 font-medium pointer-events-none">
                {field.unit}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
