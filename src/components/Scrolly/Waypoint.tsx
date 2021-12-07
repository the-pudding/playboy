import { h } from "preact";
import { Waypoint as ReactWaypoint } from "react-waypoint";

import { useWindowSize } from "../../hooks";
import Paragraphs, { Paragraph } from "../Paragraphs";
import { Section, Quote } from "./types";

export default function Waypoint({
  data,
  onEnter,
  active = false,
}: {
  data: Section;
  onEnter: () => void;
  active?: boolean;
}) {
  const { title, text, quote } = data.value.reduce<{
    title?: string;
    quote?: Quote;
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

  const ws = useWindowSize();

  return (
    <ReactWaypoint
      topOffset={ws.width > 1023 ? "33%" : "10%"}
      bottomOffset={ws.width > 1023 ? "60%" : "10%"}
      onEnter={onEnter}
    >
      <div
        style={{
          background: "var(--base-blue-1)",
          border: "1px solid transparent",
          opacity: active ? 1 : 0.3,
        }}
      >
        {title && <h2>{title}</h2>}
        {quote && (
          <blockquote>
            {quote.value.text} - {quote.value.attr}
          </blockquote>
        )}
        <Paragraphs data={text} />
      </div>
    </ReactWaypoint>
  );
}
