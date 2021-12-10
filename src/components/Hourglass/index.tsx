import { Fragment, h } from "preact";

import { Quote as IQuote, Title } from "../../types";
import Paragraphs, { Paragraph } from "../Paragraphs";
import Quote from "../Quote";
import VizHeading from "../VizHeading";
import { default as HourglassViz } from "./Hourglass";

export interface Viz {
  type: "viz";
  value: {
    title: string;
    subtitle: string;
  };
}

export type Section = Paragraph | Title | IQuote | Viz;

export default function Hourglass({ data }: { data: Section[] }) {
  return (
    <Fragment>
      {data.map((section, i) => {
        if (section.type === "title") return <h2 key={i}>{section.value}</h2>;
        if (section.type === "text")
          return <Paragraphs key={i} data={[section]} />;
        if (section.type === "quote") return <Quote key={i} data={section} />;
        if (section.type === "viz")
          return (
            <div>
              <VizHeading data={section.value} />
              <HourglassViz />
            </div>
          );
      })}
    </Fragment>
  );
}
