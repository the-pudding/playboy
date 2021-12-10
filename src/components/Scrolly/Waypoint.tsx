import { css } from "@emotion/css";
import { h } from "preact";
import { Waypoint as ReactWaypoint } from "react-waypoint";

import Paragraphs, { Paragraph } from "../Paragraphs";
import { Section, Quote } from "./types";

export default function Waypoint({
  data,
  onEnter,
  className = "",
}: {
  data: Section;
  onEnter: () => void;
  className?: string;
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

  return (
    <ReactWaypoint topOffset="10%" bottomOffset="10%" onEnter={onEnter}>
      <div className={className}>
        {title && <h2>{title}</h2>}
        {quote && (
          <blockquote
            className={css`
              font-style: italic;
              position: relative;
              padding: 1rem;
              font-size: 1rem;

              &::before {
                content: "“";
                position: absolute;
                top: 0;
                left: 0;
                font-size: 2rem;
              }

              &::after {
                content: "”";
                position: absolute;
                right: 0;
                bottom: 0;
                font-size: 2rem;
              }
            `}
          >
            <p
              dangerouslySetInnerHTML={{
                __html: quote.value.text,
              }}
              style={{ margin: 0 }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: quote.value.attr,
              }}
              style={{ margin: 0 }}
            />
          </blockquote>
        )}
        <Paragraphs data={text} />
      </div>
    </ReactWaypoint>
  );
}
