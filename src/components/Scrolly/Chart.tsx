import { select } from "d3";
import { h, Fragment } from "preact";
import { Suspense, lazy } from "preact/compat";

import { useEffect, useRef } from "preact/hooks";
import { usePlotContext } from "vizlib";
import { useIsMetric, useStore } from "../../store";

import { XAxis, YAxis } from "./Axis";
import HefnerDeath from "./HefnerDeath";
import PlaymateCircles from "./PlaymateCircles";
import { Step } from "./types";
import USAverage from "./USAverage";
import Voronoi from "./Voronoi";
import useData from "./useData";
import { formatFeetIn, GroupingSteps, ScatterSteps, STEP_UNITS } from "./util";

const LOESS = lazy(() => import("./LOESS"));

export default function Chart({ step }: { step: Step }) {
  const { chartHeight, chartWidth } = usePlotContext();
  const { scales, data, accessors } = useData(step);
  const units = useStore((state) => state.units);
  const isMetric = useIsMetric();

  const ageRef = useRef();
  useEffect(() => {
    if (step !== Step.Age) return;

    select(ageRef.current)
      .transition()
      .delay(750 * 2)
      .duration(750)
      .attr("fill-opacity", 0.2);
  }, [step]);

  return (
    <Fragment>
      {!GroupingSteps.includes(step) && (
        <Fragment>
          <XAxis
            //@ts-ignore
            scale={scales.sX}
            step={step}
          />
          <XAxis
            //@ts-ignore
            scale={scales.sX}
            step={step}
            tickSizeInner={-chartHeight}
            tickFormat={() => ""}
            opacity={0.2}
          />

          <YAxis
            //@ts-ignore its fine
            scale={scales.sY}
            step={step}
            units={STEP_UNITS[units][step]}
            {...(step === Step.Height && !isMetric
              ? {
                  tickFormat: formatFeetIn,
                }
              : {})}
          />
          <YAxis
            //@ts-ignore its fine
            scale={scales.sY}
            step={step}
            tickSizeInner={-chartWidth}
            tickFormat={() => ""}
            opacity={0.2}
          />
        </Fragment>
      )}

      {[Step.Hefner, ...ScatterSteps].includes(step) && (
        <HefnerDeath step={step} sX={scales.sX} />
      )}

      {step === Step.Age && (
        <rect
          ref={ageRef}
          x={0}
          y={scales.sY(18)}
          width={chartWidth}
          height={chartHeight - scales.sY(18)}
          fill="red"
          fillOpacity={0}
        />
      )}

      {step === Step.Height && (
        <USAverage value={scales.sY(isMetric ? 162.6 : 64)} />
      )}

      {step === Step.Weight && (
        <USAverage value={scales.sY(isMetric ? 74.9 : 165)} />
      )}

      {ScatterSteps.includes(step) && (
        <Suspense fallback={null}>
          <LOESS sX={scales.sX} sY={scales.sY} step={step} />
        </Suspense>
      )}

      <PlaymateCircles data={data} r={3} transitionDuration={750} />
      <Voronoi data={data} step={step} />
    </Fragment>
  );
}
