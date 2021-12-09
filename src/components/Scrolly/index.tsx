import { h } from "preact";
import { useState } from "preact/hooks";
import { ResponsiveSvg } from "vizlib";

import { Section, Step } from "./types";
import Waypoint from "./Waypoint";
import Chart from "./Chart";
import useData from "./useData";
import Highlights from "./Highlights";

export default function Scrolly({ sections }: { sections: Section[] }) {
  const [step, setStep] = useState<Step>(Step.Start);
  const { scales, data, accessors } = useData(step);

  console.log(scales);

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
            <Chart step={step} />
            <Highlights step={step} />
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
              active={step === section.type}
              onEnter={() => {
                setStep(section.type);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
