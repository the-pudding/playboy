import { h } from "preact";

import { Section } from "./types";
import Waypoint from "./Waypoint";

export default function Scrolly({ sections }: { sections: Section[] }) {
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
          <div
            style={{
              background: "red",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <div
          style={{
            width: "20vw",
          }}
        >
          {sections.map((section) => (
            <Waypoint key={section.type} data={section} />
          ))}
        </div>
      </div>
    </>
  );
}
