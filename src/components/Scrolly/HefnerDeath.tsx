import { h } from "preact";
import { usePlotContext } from "vizlib";
import { useOpacityTransition } from "./hooks";

import { Step } from "./types";

export default function HefnerDeath({ sX, step }: { sX: any; step: Step }) {
  const { chartHeight } = usePlotContext();
  const ref = useOpacityTransition(true);

  return (
    <>
      <g
        transform={`translate(${sX(
          step === Step.Hefner ? "2017" : new Date(2017, 8, 27)
        )},0)`}
        ref={ref}
        opacity={0}
      >
        <line x1={0} y1={0} x2={0} y2={chartHeight} stroke="white" />
        <text fill="white" fontSize={11} transform="rotate(90)" dx={6} dy={-4}>
          Hugh Hefner dies Sept 27, 2017
        </text>
      </g>
    </>
  );
}
