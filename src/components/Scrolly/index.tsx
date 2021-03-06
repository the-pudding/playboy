import { h } from "preact";
import { useLayoutEffect, useState } from "preact/hooks";
import { ResponsiveSvg } from "vizlib";
import { color } from "d3-color";

import { PointSteps, Section, Step } from "./types";
import Waypoint from "./Waypoint";
import Chart from "./Chart";
import Highlights from "./Highlights";

export default function Scrolly({ sections }: { sections: Section[] }) {
  const [step, setStep] = useState<Step>(Step.Marilyn);

  const [waypointBG, setWaypointBG] = useState<string>("transparent");
  useLayoutEffect(() => {
    const waypointBG = color(
      window
        .getComputedStyle(document.documentElement)
        .getPropertyValue("--color-background")
    ).brighter(0.5);
    waypointBG.opacity = 0.7;
    setWaypointBG(waypointBG.toString());
  });

  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "sticky",
            top: "10vh",
            height: "80vh",
            width: "95vw",
            margin: "0 auto",
            zIndex: 0,
          }}
        >
          <ResponsiveSvg margin={{ top: 30, left: 40, right: 20, bottom: 10 }}>
            <Chart step={step} />
            {PointSteps.includes(step) && <Highlights step={step} />}
          </ResponsiveSvg>
        </div>
        <div
          style={{
            maxWidth: "40ch",
            zIndex: 1,
            position: "relative",
            pointerEvents: "none",
            display: "flex",
            flexDirection: "column",
          }}
          className="scrolly-text"
        >
          {sections.map((section, i) => (
            <Waypoint
              key={section.type}
              data={section}
              onEnter={() => {
                setStep(section.type);
              }}
              number={i + 1}
              total={sections.length}
              style={{
                background: waypointBG,
                border: "1px solid white",
                marginBottom: "90vh",
                pointerEvents: "all",
                padding: "0 1rem",
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
