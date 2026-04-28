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
