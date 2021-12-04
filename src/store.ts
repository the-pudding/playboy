import create from "zustand";

interface State {
  units: "imperial" | "metric";
  set: (units: "imperial" | "metric") => void;
}

export const useStore = create<State>((setS, get) => ({
  units: "imperial",
  set: (units) => setS({ units }),
}));

export function useIsMetric() {
  const units = useStore((state) => state.units);
  return units === "metric";
}
