import {
  format,
  group,
  range,
  scaleBand,
  scaleLinear,
  ScaleOrdinal,
  select,
  Series,
  stack as d3stack,
  stackOrderDescending,
} from "d3";
import { useEffect, useRef } from "preact/hooks";
import { SVGProps } from "react";
import { Axis } from "vizlib";

import { data, Playmate } from "../../data/data";
import { CAccessor, XAccessor, YAccessor } from "./accessors";

export default function Bars({
  width,
  height,
  colorScale,
  accessor,
  ...rest
}: {
  width: number;
  height: number;
  colorScale: ScaleOrdinal<string, unknown, never>;
  accessor: XAccessor | YAccessor | CAccessor;
} & SVGProps<SVGGElement>) {
  const years = range(1953, 2021).map((year) => {
    const cols = Object.fromEntries(
      group(
        data.filter((d) => d.year === year),
        (d) => accessor(d) ?? null
      )
    );
    return {
      year,
      ...cols,
    };
  });

  const stack = d3stack<Playmate>()
    .order(stackOrderDescending)
    .keys(colorScale.domain())
    .value((d, key) => {
      const total = Object.keys(d)
        .filter((d) => d !== "year")
        .reduce((tot, v) => tot + d[v].length, 0);

      return (d[key]?.length ?? 0) / total;
    })(years);

  const yScale = scaleLinear()
    .domain([0, 1])
    .range([height - 10, 0]);

  const xScale = scaleBand()
    .domain(years.map((d) => d.year.toString()))
    .range([0, width])
    .padding(0.1);

  const barsRef = useRef(null);

  useEffect(() => {
    if (!barsRef.current) return;

    select(barsRef.current)
      .selectAll("g")
      .data(stack, (d: Series<Playmate, string>) => d.key)
      .join("g")
      // @ts-ignore
      .attr("fill", (d: Series<Playmate, string>) => colorScale(d.key))
      .selectAll("rect")
      .data(
        (d) => d,
        (d: Series<Playmate, string>) => d.key
      )
      .join((enter) =>
        enter
          .append("rect")
          .attr("x", (d) => xScale(d.data.year.toString()))
          .attr("width", (d) => xScale.bandwidth())
          .attr("y", yScale(yScale.domain()[0]))
          .attr("height", 0)
          .transition()
          .duration(750)
          .delay((d, i) => i * 25)
          .attr("y", (d) => yScale(d[1]))
          .attr("height", (d) => {
            const h = yScale(d[0]) - yScale(d[1]);
            return h;
          })
      );
  }, [width, height, colorScale, accessor]);

  return (
    // @ts-ignore
    <g {...rest}>
      <Axis
        scale={yScale}
        orientation="left"
        tickFormat={format(".0%")}
        transitionDuration={300}
      />
      <Axis
        scale={xScale}
        orientation="bottom"
        tickValues={range(1955, 2021, 5).map(String)}
        transform={`translate(0,${height - 10})`}
        transitionDuration={300}
      />
      <g ref={barsRef} />
    </g>
  );
}
