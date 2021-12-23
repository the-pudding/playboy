import { select } from "d3";
import { ComponentProps, h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { Axis, usePlotContext } from "vizlib";

import { useYearTickValues } from "../../hooks";
import { Step, TimelineSteps } from "./types";
import { MONTHS_FULL, MONTHS } from "./util";

export const XAxis = ({
  step,
  ...rest
}: {
  step: Step;
} & ComponentProps<typeof Axis>) => {
  const xTickValues = useYearTickValues();
  const { chartHeight } = usePlotContext();
  // const ref = useRef();
  // const [transform, setTransform] = useState("");

  // useEffect(() => {
  //   if (TimelineSteps.includes(step)) {
  //     setTransform(`translate(0, ${chartHeight / 2})`);
  //   } else {
  //     setTransform("translate(0, 0)");
  //   }
  // }, [step]);

  // useEffect(() => {
  //   if (!ref.current) return;

  //   console.log("ah", ref.current);

  //   select(ref.current).transition().duration(750).attr("transform", transform);
  // }, [ref.current, transform]);

  switch (step) {
    case Step.Marilyn:
      return (
        <Axis
          orientation="top"
          tickSizeOuter={0}
          transitionDuration={750}
          tickValues={[new Date(1953, 11, 1)]}
          tickFormat={(d) => `${MONTHS_FULL[d.getMonth()]} ${d.getFullYear()}`}
          style={{
            transform: `translate(0px, ${chartHeight / 2}px)`,
            transition: "transform 750ms",
          }}
          {...rest}
        />
      );
    case Step.JenniferJackson:
      return (
        <Axis
          orientation="top"
          tickSizeOuter={0}
          transitionDuration={750}
          tickValues={[new Date(1953, 11, 1), new Date(1965, 2, 1)]}
          tickFormat={(d) => `${MONTHS_FULL[d.getMonth()]} ${d.getFullYear()}`}
          style={{
            transform: `translate(0px, ${chartHeight / 2}px)`,
            transition: "transform 750ms",
          }}
          {...rest}
        />
      );
    case Step.InesRau:
      return (
        <Axis
          orientation="top"
          tickSizeOuter={0}
          transitionDuration={750}
          tickValues={[
            new Date(1953, 11, 1),
            new Date(1965, 2, 1),
            new Date(2017, 10, 1),
          ]}
          tickFormat={(d) => `${MONTHS_FULL[d.getMonth()]} ${d.getFullYear()}`}
          style={{
            transform: `translate(0px, ${chartHeight / 2}px)`,
            transition: "transform 750ms",
          }}
          {...rest}
        />
      );
    case Step.MarshaElle:
      return (
        <Axis
          orientation="top"
          tickSizeOuter={0}
          transitionDuration={750}
          tickValues={[
            new Date(1953, 11, 1),
            new Date(1965, 2, 1),
            new Date(2020, 3, 1),
          ]}
          tickFormat={(d) => `${MONTHS_FULL[d.getMonth()]} ${d.getFullYear()}`}
          style={{
            transform: `translate(0px, ${chartHeight / 2}px)`,
            transition: "transform 750ms",
          }}
          {...rest}
        />
      );

    case Step.OtherFirsts:
    case Step.Explainer:
    case Step.NoIssue:
    case Step.Hefner:
      return (
        <Axis
          orientation="top"
          tickValues={xTickValues.map(String)}
          tickSizeOuter={0}
          transitionDuration={300}
          style={{
            transform: `translate(0, 0)`,
            transition: "transform 750ms",
          }}
          {...rest}
        />
      );

    case Step.Age:
    case Step.Height:
    case Step.Weight:
    case Step.Bust:
    case Step.Waist:
    case Step.Hips:
      return (
        <Axis
          orientation="top"
          tickSizeOuter={0}
          transitionDuration={300}
          tickValues={xTickValues.map((d) => new Date(d, 0, 1))}
          style={{
            transform: `translate(0, 0)`,
            transition: "transform 750ms",
          }}
          {...rest}
        />
      );

    default:
      return null;
  }
};

export const YAxis = ({
  step,
  units,
  ...rest
}: {
  step: Step;
  units?: string;
} & ComponentProps<typeof Axis>) => {
  switch (step) {
    case Step.Explainer:
    case Step.NoIssue:
    case Step.OtherFirsts:
    case Step.Hefner:
      return (
        <Axis
          orientation="left"
          tickFormat={(d) => MONTHS[d]}
          transitionDuration={300}
          tickSizeOuter={0}
          {...rest}
        />
      );

    case Step.Marilyn:
    case Step.JenniferJackson:
    case Step.InesRau:
    case Step.MarshaElle:
    case Step.Age:
    case Step.Height:
    case Step.Weight:
    case Step.Bust:
    case Step.Waist:
    case Step.Hips:
      return (
        <g>
          <Axis
            orientation="left"
            tickSizeOuter={0}
            transitionDuration={300}
            {...rest}
          />
          {units && (
            <text
              y={rest.scale(rest.scale.domain()[0])}
              fill="currentColor"
              fontSize={12}
              dx="6px"
            >
              {units}
            </text>
          )}
        </g>
      );

    default:
      return null;
  }
};
