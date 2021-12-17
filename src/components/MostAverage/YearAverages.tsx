import { groups, mean, range, scaleBand, scaleLinear } from "d3";
import { h } from "preact";
import { ResponsiveSvg, usePlotContext, Axis } from "vizlib";

import { data } from "../../data/data";
import { useYearTickValues } from "../../hooks";
import { PLAYMATE_PINK } from "../../util";

const yearAvgs = groups(data, (d) => d.year).map(([year, arr]) => [
  year,
  mean(arr, (d) => d.avgDist),
]);

function Viz() {
  const ctx = usePlotContext();
  const x = scaleBand()
    .domain(
      yearAvgs
        .map((d) => d[0])
        .sort((a, b) => a - b)
        .map(String)
    )
    .range([0, ctx.chartWidth])
    .padding(0.2);
  const y = scaleLinear().domain([0, 1]).range([ctx.chartHeight, 0]).nice();

  const xTickValues = useYearTickValues();

  return (
    <>
      <Axis
        scale={x}
        orientation="bottom"
        transform={`translate(0,${ctx.chartHeight})`}
        tickValues={xTickValues.map(String)}
      />
      <Axis scale={y} orientation="left" tickValues={range(0, 1.1, 0.2)}>
        <text
          x={0}
          y={0}
          textAnchor="start"
          dominantBaseline="hanging"
          fill="currentColor"
          dx={4}
        >
          Average difference from "Average"
        </text>
      </Axis>
      <Axis
        scale={y}
        orientation="left"
        tickFormat={(d) => ""}
        tickSizeInner={-ctx.chartWidth}
        opacity={0.2}
      />
      {yearAvgs.map(([year, avg]) => (
        <rect
          key={year}
          x={x(year.toString())}
          y={y(avg)}
          width={x.bandwidth()}
          height={ctx.chartHeight - y(avg)}
          fill={PLAYMATE_PINK}
        />
      ))}
    </>
  );
}

export default function YearAverages() {
  return (
    <ResponsiveSvg aspectRatio={2} margin={30}>
      <Viz />
    </ResponsiveSvg>
  );
}
