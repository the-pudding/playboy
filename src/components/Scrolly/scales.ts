import { identity } from "remeda/dist/es/identity";
import {
  scalePoint,
  scaleTime,
  scaleLinear,
  scaleOrdinal,
  range,
  extent,
  group,
  hierarchy,
  pack,
  schemeSpectral,
} from "d3";

import { Breasts, data, Ethnicity, Hair, Playmate } from "../../data/data";
import { Step } from "./types";
import { CAccessor, XAccessor, YAccessor } from "./accessors";

export default function scales({
  step,
  chartHeight,
  chartWidth,
  xA,
  yA,
  cA,
  isSm,
}: {
  step: Step;
  chartHeight: number;
  chartWidth: number;
  xA: XAccessor;
  yA: YAccessor;
  cA: CAccessor;
  isSm: boolean;
}) {
  const timeScale = scaleTime()
    //@ts-ignore
    .domain([new Date(1953, 11, 1), new Date(2021, 0, 1)])
    .range([0, chartWidth]);

  switch (step) {
    case Step.Marilyn: {
      let width = timeScale(new Date(1954, 0, 1));
      return [
        scaleTime()
          .domain([new Date(1953, 11, 1), new Date(1953, 11, 1)])
          .range([chartWidth / 2 - width / 2, chartWidth / 2 + width / 2]),
        () => chartHeight / 2,
        identity,
      ] as const;
    }
    case Step.JenniferJackson: {
      let width = timeScale(new Date(1965, 2, 1));
      return [
        scaleTime()
          .domain([new Date(1953, 11, 1), new Date(1965, 2, 1)])
          .range([chartWidth / 2 - width / 2, chartWidth / 2 + width / 2]),
        () => chartHeight / 2,
        identity,
      ] as const;
    }
    case Step.InesRau: {
      let width = timeScale(new Date(2017, 10, 1));
      return [
        scaleTime()
          .domain([new Date(1953, 11, 1), new Date(2017, 10, 1)])
          .range([chartWidth / 2 - width / 2, chartWidth / 2 + width / 2]),
        () => chartHeight / 2,
        identity,
      ] as const;
    }
    case Step.MarshaElle: {
      let width = timeScale(new Date(2020, 3, 1));
      return [
        scaleTime()
          .domain([new Date(1953, 11, 1), new Date(2020, 3, 1)])
          .range([chartWidth / 2 - width / 2, chartWidth / 2 + width / 2]),
        () => chartHeight / 2,
        identity,
      ] as const;
    }

    case Step.OtherFirsts:
    case Step.Explainer:
    case Step.NoIssue:
    case Step.Hefner: {
      return [
        scalePoint()
          .range([0, chartWidth])
          .domain(data.map((d) => d.year.toString()))
          .padding(0.5),

        scalePoint()
          .range([0, chartHeight])
          .domain(range(12).map((d) => d.toString()))
          .padding(0.5),

        identity,
      ] as const;
    }

    case Step.Age:
    case Step.Height:
    case Step.Weight:
    case Step.Bust:
    case Step.Waist:
    case Step.Hips: {
      return [
        scaleTime()
          //@ts-ignore
          .domain(extent(data, xA))
          .range([0, chartWidth]),

        scaleLinear()
          .domain(
            //@ts-ignore
            extent(data, yA)
          )
          .range([chartHeight, 0])
          .nice(),

        identity,
      ] as const;
    }

    case Step.Hair:
    case Step.Ethnicity:
    case Step.Enhancements: {
      const packer = pack<Playmate>()
        .size(
          isSm
            ? [chartWidth, chartHeight / 2]
            : [chartWidth / 2 - 10, chartHeight]
        )
        .padding((d) => (d.depth === 1 ? 8 : 60));

      const grouped = group(data, cA);
      const hi = hierarchy(grouped).count();

      // @ts-ignore wrong typings in case when arg is a Map
      const packed = packer(hi);

      const nodes = packed.leaves();

      const csD = {
        [Step.Hair]: Object.values(Hair)
          .filter((d) => typeof d === "string")
          .map((d) => d.toString()),
        [Step.Ethnicity]: Object.values(Ethnicity)
          .filter((d) => typeof d === "string")
          .map((d) => d.toString()),
        [Step.Enhancements]: Object.values(Breasts)
          .filter((d) => typeof d === "string")
          .map((d) => d.toString()),
      };
      const csR = {
        hair: ["#fee08b", "#555", "rgb(140 81 23)", "#c74742"],
        ethnicity: schemeSpectral[4],
        enhancements: schemeSpectral[3],
      };

      const colorScale = scaleOrdinal().domain(csD[step]).range(csR[step]);

      return [
        (d) => nodes.find((n) => d.name === n.data.name)?.x,
        (d) => nodes.find((n) => d.name === n.data.name)?.y,
        colorScale,
        packed.children,
      ] as const;
    }

    default:
      throw Error(`step ${step} is not accounted for!`);
  }
}
