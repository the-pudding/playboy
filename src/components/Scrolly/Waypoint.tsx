import { h } from "preact";
import { Waypoint as ReactWaypoint } from "react-waypoint";

import Paragraphs, { Paragraph } from "../Paragraphs";
import { Quote as IQuote } from "../../type";
import { Section } from "./types";
import Quote from "../Quote";

export default function Waypoint({
  data,
  onEnter,
  style,
  number,
  total,
}: {
  data: Section;
  onEnter: () => void;
  style: any;
  number: number;
  total: number;
}) {
  const { title, text, quote } = data.value.reduce<{
    title?: string;
    quote?: IQuote;
    text: Paragraph[];
  }>(
    (acc, cur) => {
      if (cur.type === "title") {
        acc.title = cur.value;
      } else if (cur.type === "text") {
        acc.text.push(cur);
      } else if (cur.type === "quote") {
        acc.quote = cur;
      }
      return acc;
    },
    {
      title: null,
      text: [],
      quote: null,
    }
  );

  return (
    <ReactWaypoint topOffset="10%" bottomOffset="10%" onEnter={onEnter}>
      <div style={style}>
        <div
          style={{
            textAlign: "right",
            fontSize: "0.7rem",
            color: "var(--color-text)",
          }}
        >
          {number}/{total}
        </div>
        {title && <h2>{title}</h2>}
        {quote && <Quote data={quote} />}
        <Paragraphs data={text} />
      </div>
    </ReactWaypoint>
  );
}
