import { h } from "preact";
import { useState } from "preact/hooks";
import { ResponsiveSvg } from "vizlib";

import { Section } from "./types";
import Waypoint from "./Waypoint";
import Chart from "./Chart";

const STAGES = [
  "start",
  "marilyn",
  "noissue",
  "jenniferjackson",
  "inesrau",
  "marshaelle",
  "otherfirsts",
  "karenmcdougal",
  "hefner",
  "age",
  "height",
  "weight",
  "bust",
  "waist",
  "hips",
  "hair",
  "enhancements",
  "ethnicity",
];

export default function Scrolly({ sections }: { sections: Section[] }) {
  const [stage, setStage] = useState<typeof STAGES[number]>("start");

  return (
    <>
      <div
        style={{
          position: "relative",
          display: "flex",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: "10vh",
            height: "80vh",
            width: "80vw",
          }}
        >
          <ResponsiveSvg margin={{ top: 30, left: 30, right: 10, bottom: 10 }}>
            <Chart />
          </ResponsiveSvg>
        </div>
        <div
          style={{
            width: "20vw",
          }}
        >
          {sections.map((section) => (
            <Waypoint
              key={section.type}
              data={section}
              active={stage === section.type}
              onEnter={() => {
                setStage(section.type);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
