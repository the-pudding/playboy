import { Fragment, h } from "preact";

import { Quote as IQuote, Title } from "../../types";
import Paragraphs, { Paragraph } from "../Paragraphs";
import Quote from "../Quote";
import VizHeading from "../VizHeading";

export interface Viz {
  type: "avgViz" | "diffViz";
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
        if (section.type === "avgViz" || section.type === "diffViz")
          return (
            <div>
              <VizHeading data={section.value} />
            </div>
          );
      })}
    </Fragment>
  );
}
