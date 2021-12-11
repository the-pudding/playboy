import { h } from "preact";
import { useState } from "preact/hooks";
import { ResponsiveSvg } from "vizlib";

import { Section, Step } from "./types";
import Waypoint from "./Waypoint";
import Chart from "./Chart";
import Highlights from "./Highlights";
// import { css } from "@emotion/css";

export default function Scrolly({ sections }: { sections: Section[] }) {
  const [step, setStep] = useState<Step>(Step.Start);

  return (
    <>
      <div
      // className={css`
      //   position: relative;
      // `}
      >
        <div
        // className={css`
        //   position: sticky;
        //   top: 10vh;
        //   height: 80vh;
        //   width: 95vw;
        //   margin: 0 auto;
        //   z-index: 0;
        // `}
        >
          <ResponsiveSvg margin={{ top: 30, left: 30, right: 10, bottom: 10 }}>
            <Chart step={step} />
            <Highlights step={step} />
          </ResponsiveSvg>
        </div>
        <div
        // className={css`
        //   max-width: 40ch;
        //   z-index: 1;
        //   position: relative;
        //   pointer-events: none;
        // `}
        >
          {sections.map((section, i) => (
            <Waypoint
              key={section.type}
              data={section}
              onEnter={() => {
                setStep(section.type);
              }}
              // className={css`
              //   background: rgba(80, 80, 96, 0.7);
              //   border: 1px solid transparent;
              //   opacity: ${step === section.type ? 1 : 0.5};
              //   padding: 0 0.5rem;
              //   margin-bottom: ${i === sections.length - 1 ? 0 : "90vh"};
              //   pointer-events: all;
              // `}
            />
          ))}
        </div>
      </div>
    </>
  );
}
