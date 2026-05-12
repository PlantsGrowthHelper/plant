export const PLANT_NAMES = [
  "몬스테라",
  "보스턴고사리",
  "홍콩야자",
  "스파티필럼",
  "테이블야자",
  "호접란",
  "부레옥잠",
  "선인장",
  "스투키",
  "금전수",
  "벵갈고무나무",
  "디펜바키아",
  "관음죽",
  "오렌지자스민",
  "올리브나무",
] as const;

export type PlantName = (typeof PLANT_NAMES)[number];

export type SoilPreset = {
  label: string;
  values: {
    highEC: number;
    highPH: number;
    highSoilHumi: number;
    lowSoilEC: number;
    lowSoilHumi: number;
    lowSoilPH: number;
  };
};

export const SOIL_PRESETS: SoilPreset[] = [
  {
    label: "일반 화분",
    values: { highEC: 1.2, highPH: 6.5, highSoilHumi: 55.0, lowSoilEC: 0.8, lowSoilHumi: 45.0, lowSoilPH: 6.2 },
  },
  {
    label: "다육식물",
    values: { highEC: 0.6, highPH: 7.0, highSoilHumi: 20.0, lowSoilEC: 0.4, lowSoilHumi: 15.0, lowSoilPH: 6.8 },
  },
  {
    label: "열대식물",
    values: { highEC: 1.8, highPH: 6.0, highSoilHumi: 75.0, lowSoilEC: 1.4, lowSoilHumi: 65.0, lowSoilPH: 5.8 },
  },
  {
    label: "허브류",
    values: { highEC: 1.5, highPH: 6.5, highSoilHumi: 60.0, lowSoilEC: 1.0, lowSoilHumi: 50.0, lowSoilPH: 6.3 },
  },
];
