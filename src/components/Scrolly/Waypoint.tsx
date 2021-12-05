import { h } from "preact";

import Paragraphs, { Paragraph } from "../Paragraphs";
import { Section, Quote } from "./types";

export default function Waypoint({ data }: { data: Section }) {
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

  return (
    <div
      style={{
        background: "var(--base-blue-1)",
        border: "1px solid transparent",
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
  );
}
