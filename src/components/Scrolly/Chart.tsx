import { h, Fragment } from "preact";
import { usePlotContext } from "vizlib";
import { useStore } from "../../store";

import { XAxis, YAxis } from "./Axis";
import HefnerDeath from "./HefnerDeath";
import PlaymateCircles from "./PlaymateCircles";
import { Step } from "./types";
import useData from "./useData";
import { formatFeetIn, GroupingSteps, ScatterSteps, STEP_UNITS } from "./util";

export default function Chart({ step }: { step: Step }) {
  const { chartHeight, chartWidth } = usePlotContext();
  const { scales, data, accessors } = useData(step);
  const units = useStore((state) => state.units);
  console.log(data);
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
            {...(step === Step.Height && units !== "metric"
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

      <PlaymateCircles data={data} r={3} transitionDuration={750} />
    </Fragment>
  );
}
