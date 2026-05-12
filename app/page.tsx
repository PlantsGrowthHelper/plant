"use client";

import { useState } from "react";
import SoilInput from "@/components/SoilInput";
import ImageUpload from "@/components/ImageUpload";
import PlantSelector from "@/components/PlantSelector";
import { SOIL_PRESETS, PlantName } from "@/lib/presets";

type FormData = {
  airHumidity: string;
  airTemperature: string;
  amtIrrigation: string;
  quantum: string;
  getDateTime: string;
  highEC: string;
  highPH: string;
  highSoilHumi: string;
  lowSoilEC: string;
  lowSoilHumi: string;
  lowSoilPH: string;
};

const INITIAL: FormData = {
  airHumidity: "",
  airTemperature: "",
  amtIrrigation: "",
  quantum: "",
  getDateTime: "",
  highEC: "",
  highPH: "",
  highSoilHumi: "",
  lowSoilEC: "",
  lowSoilHumi: "",
  lowSoilPH: "",
};

export default function Home() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [selectedPlant, setSelectedPlant] = useState<PlantName | null>(null);
  const [loading, setLoading] = useState(false);

  const set = (key: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const applyPreset = (values: (typeof SOIL_PRESETS)[0]["values"]) => {
    setForm((prev) => ({
      ...prev,
      highEC: String(values.highEC),
      highPH: String(values.highPH),
      highSoilHumi: String(values.highSoilHumi),
      lowSoilEC: String(values.lowSoilEC),
      lowSoilHumi: String(values.lowSoilHumi),
      lowSoilPH: String(values.lowSoilPH),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#f4f8f4]">
      {/* Header */}
      <header className="bg-white border-b border-green-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-green-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold text-green-900 leading-none">Plants Growth Helper</h1>
            <p className="text-xs text-green-500 mt-0.5">AI 기반 식물 성장 예측 시스템</p>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-6">
            {/* Left: 2 columns */}
            <div className="col-span-2 flex flex-col gap-6">
              <PlantSelector selected={selectedPlant} onChange={setSelectedPlant} />

              {/* 환경 정보 */}
              <div className="bg-white rounded-2xl border border-green-100 p-6 shadow-sm">
                <h2 className="text-base font-semibold text-green-900 mb-5">환경 정보</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-green-700 mb-1 font-medium">공기 온도</label>
                    <div className="relative">
                      <input
                        type="number"
                        step="0.1"
                        value={form.airTemperature}
                        onChange={(e) => set("airTemperature", e.target.value)}
                        placeholder="0.0"
                        className="w-full border border-green-200 rounded-lg px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 text-green-900 placeholder-green-300"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-green-400 pointer-events-none">°C</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-green-700 mb-1 font-medium">공기 습도</label>
                    <div className="relative">
                      <input
                        type="number"
                        step="0.1"
                        value={form.airHumidity}
                        onChange={(e) => set("airHumidity", e.target.value)}
                        placeholder="0.0"
                        className="w-full border border-green-200 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 text-green-900 placeholder-green-300"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-green-400 pointer-events-none">%</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-green-700 mb-1 font-medium">광량 (Quantum)</label>
                    <div className="relative">
                      <input
                        type="number"
                        value={form.quantum}
                        onChange={(e) => set("quantum", e.target.value)}
                        placeholder="0"
                        className="w-full border border-green-200 rounded-lg px-3 py-2 pr-16 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 text-green-900 placeholder-green-300"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-green-400 pointer-events-none">μmol</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-green-700 mb-1 font-medium">관개량</label>
                    <div className="relative">
                      <input
                        type="number"
                        value={form.amtIrrigation}
                        onChange={(e) => set("amtIrrigation", e.target.value)}
                        placeholder="0"
                        className="w-full border border-green-200 rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 text-green-900 placeholder-green-300"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-green-400 pointer-events-none">L</span>
                    </div>
                  </div>

                  <div className="col-span-2">
                    <label className="block text-xs text-green-700 mb-1 font-medium">측정 날짜</label>
                    <input
                      type="date"
                      value={form.getDateTime}
                      onChange={(e) => set("getDateTime", e.target.value)}
                      className="w-full border border-green-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 text-green-900"
                    />
                  </div>
                </div>
              </div>

              {/* 토양 정보 */}
              <SoilInput
                values={form}
                onChange={(key, value) => set(key as keyof FormData, value)}
                onPreset={applyPreset}
              />
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-6">
              <ImageUpload />

              {/* 결과 안내 */}
              <div className="bg-green-700 rounded-2xl p-6 text-white shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold text-green-100">예측 결과 안내</span>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2 text-green-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 shrink-0" />
                    다음 1주 키·성장량 예측
                  </li>
                  <li className="flex items-start gap-2 text-green-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 shrink-0" />
                    주요 기여 요인 설명 (SHAP)
                  </li>
                  <li className="flex items-start gap-2 text-green-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 shrink-0" />
                    물주기·배치 시나리오 제안
                  </li>
                </ul>
              </div>

              {/* 제출 버튼 */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-300 text-white font-semibold py-3.5 rounded-xl transition-colors text-sm shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    분석 중...
                  </>
                ) : (
                  "성장 예측 시작"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
