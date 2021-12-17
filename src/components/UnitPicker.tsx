import { h } from "preact";

import { useIsMetric, useStore } from "../store";

export default function UnitPicker({}: {}) {
  const store = useStore();
  const isMetric = useIsMetric();

  return (
    <p>
      Show data units in{" "}
      <button
        onClick={() => store.set("imperial")}
        className={`unit-picker-button ${!isMetric && "active"}`}
      >
        feet, inches, pounds
      </button>{" "}
      or{" "}
      <button
        onClick={() => store.set("metric")}
        className={`unit-picker-button ${isMetric && "active"}`}
      >
        centimetres, kilograms
      </button>
    </p>
  );
}
