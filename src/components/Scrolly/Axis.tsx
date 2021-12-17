import { range } from "d3";
import { ComponentProps, h } from "preact";
import { Axis } from "vizlib";

import { useYearTickValues } from "../../hooks";
import { Step } from "./types";
import { MONTHS } from "./util";

export const XAxis = ({
  step,
  ...rest
}: {
  step: Step;
} & ComponentProps<typeof Axis>) => {
  const xTickValues = useYearTickValues();

  switch (step) {
    case Step.Start:
    case Step.Marilyn:
    case Step.NoIssue:
    case Step.JenniferJackson:
    case Step.InesRau:
    case Step.MarshaElle:
    case Step.OtherFirsts:
    case Step.KarenMcDougal:
    case Step.Hefner:
      return (
        <Axis
          orientation="top"
          tickValues={xTickValues.map(String)}
          tickSizeOuter={0}
          transitionDuration={300}
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
    case Step.Start:
    case Step.Marilyn:
    case Step.NoIssue:
    case Step.JenniferJackson:
    case Step.InesRau:
    case Step.MarshaElle:
    case Step.OtherFirsts:
    case Step.KarenMcDougal:
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
