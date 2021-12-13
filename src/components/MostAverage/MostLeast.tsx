import { scalePoint, scaleTime, range } from "d3";
import { h, Fragment } from "preact";
import { Axis, ResponsiveSvg, usePlotContext } from "vizlib";

import { data } from "../../data/data";
import Lollipop from "./Lollipop";

function Viz() {
  const ordered = [...data].sort((a, b) => a.avgDist - b.avgDist);
  const most = ordered.slice(0, 5);
  const least = ordered.slice(-5);

  const { chartWidth, chartHeight } = usePlotContext();

  const x = scaleTime(
    [new Date(1970, 0, 1), new Date(2022, 0, 1)],
    [0, chartWidth]
  );

  const y = scalePoint(range(15), [0, chartHeight]).padding(1);

  return (
    <Fragment>
      <Axis scale={x} orientation="top" tickSizeOuter={0} />
      <Axis
        scale={y}
        orientation="right"
        transform={`translate(${chartWidth},0)`}
        tickFormat={(d) => {
          if (d < 5) return `#${d + 1}`;
          if (d > 9) return `#${806 - 14 + d}`;
          return "";
        }}
        tickSize={0}
        tickSizeInner={3}
        tickSizeOuter={0}
      />
      <text
        transform={`translate(${chartWidth},${y(0)})`}
        fill="white"
        dy={-15}
        dx={4}
        fontSize={12}
      >
        Most Average
      </text>
      <text
        transform={`translate(${chartWidth},${y(14)})`}
        fill="white"
        dy={25}
        dx={4}
        fontSize={12}
      >
        Least Average
      </text>
      <g transform={`translate(${chartWidth},${y(7)})`}>
        <text
          transform={`rotate(-90)`}
          fill="white"
          fontSize={12}
          textAnchor="middle"
          dy={15}
        >
          ... 796 more Playmates ...
        </text>
      </g>
      {most.map((d, i) => (
        <Lollipop x1={x(d.date)} y1={y(i)} y2={y(i)} key={i} data={d} />
      ))}
      {least.map((d, i) => (
        <Lollipop
          x1={x(d.date)}
          y1={y(i + 10)}
          y2={y(i + 10)}
          key={i}
          data={d}
        />
      ))}
    </Fragment>
  );
}

export default function MostLeast() {
  return (
    <div
      style={{ height: `${24 * 25}px`, maxWidth: "50rem", margin: "0 auto" }}
    >
      <ResponsiveSvg
        margin={{
          left: 20,
          bottom: 5,
          top: 30,
          right: 100,
        }}
      >
        <Viz />
      </ResponsiveSvg>
    </div>
  );
}
