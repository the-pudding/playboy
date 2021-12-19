import {
  curveCatmullRom,
  extent,
  line,
  randomNormal,
  range,
  scaleLinear,
} from "d3";
import { Fragment, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { ResponsiveSvg, usePlotContext } from "vizlib";

import doc from "../../data/doc.json";
import Silhouette from "./Silhouette";
import style from "./style.module.css";

const random = {
  top: () => 32,
  bust: randomNormal(36, 3),
  waist: randomNormal(24, 3),
  hips: randomNormal(36, 3),
  bottom: () => 36,
};

function randomSilhouettes(n: number) {
  return range(0, n).map(() => {
    return [
      { y: "top", x: random.top() },
      { y: "bust", x: random.bust() },
      { y: "waist", x: random.waist() },
      { y: "hips", x: random.hips() },
      { y: "bottom", x: random.bottom() },
    ];
  });
}

export default function Title() {
  const [silhouettes, setSilhouettes] = useState(randomSilhouettes(3));

  useEffect(() => {
    const id = window.setInterval(() => {
      const data = randomSilhouettes(3);
      setSilhouettes(data);
    }, 3000);

    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    setSilhouettes(randomSilhouettes(3));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "15%",
          maxWidth: "6rem",
        }}
      >
        <ResponsiveSvg margin={5} style={{ display: "block" }}>
          <Silhouettes
            data={silhouettes.map((s) => s.map((d) => ({ ...d, x: -d.x })))}
          />
        </ResponsiveSvg>
      </div>
      <div
        style={{
          maxWidth: "30rem",
          width: "70%",
        }}
      >
        <h1 className={style.title}>
          {doc.title.split(":")[0]}:
          <br />
          {doc.title.split(":")[1]}
        </h1>
        <div className={style.subtitle}>{doc.subtitle}</div>
      </div>
      <div
        style={{
          width: "15%",
          maxWidth: "6rem",
        }}
      >
        <ResponsiveSvg margin={5} style={{ display: "block" }}>
          <Silhouettes data={silhouettes} />
        </ResponsiveSvg>
      </div>
    </div>
  );
}

function Silhouettes({ data }: { data: { y: string; x: number }[][] }) {
  const { chartHeight, chartWidth } = usePlotContext();

  const sX = scaleLinear()
    .range([0, chartWidth])
    .domain(extent(data.flatMap((s) => s.map((d) => d.x))));

  const sY = scaleLinear().domain([0, 89]).range([0, chartHeight]);

  const partToSy = {
    top: 0,
    bust: 18,
    waist: 39,
    hips: 74,
    bottom: 89,
  };

  const lineGenerator = line<{ x: number; y: string }>()
    .x((d) => {
      const k = sX(d.x);
      return k;
    })
    .y((d) => {
      const k = sY(partToSy[d.y]);
      return k;
    })
    .curve(curveCatmullRom);

  return (
    <Fragment>
      {data.map((s, i) => (
        <Silhouette
          line={lineGenerator}
          stroke={["magenta", "cyan", "yellow", "green"][i]}
          data={s}
          key={i}
        />
      ))}
    </Fragment>
  );
}
