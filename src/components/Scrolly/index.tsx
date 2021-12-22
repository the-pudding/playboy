import { h } from "preact";
import { useLayoutEffect, useState } from "preact/hooks";
import { ResponsiveSvg } from "vizlib";
import { color } from "d3-color";

import { Section, Step } from "./types";
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
    ).brighter(2);
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
          <ResponsiveSvg margin={{ top: 30, left: 30, right: 10, bottom: 10 }}>
            <Chart step={step} />
            <Highlights step={step} />
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
                border: "1px solid transparent",
                opacity: step === section.type ? 1 : 0.5,
                padding: "0 0.5rem",
                marginBottom: "90vh",
                pointerEvents: "all",
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
