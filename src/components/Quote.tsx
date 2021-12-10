import { css } from "@emotion/css";
import { h } from "preact";

import { Quote } from "../types";

export default function Quote({ data }: { data: Quote }) {
  return (
    <blockquote
      className={css`
        font-style: italic;
        position: relative;
        padding: 1rem;
        font-size: 1rem;
        max-width: 43rem;
        margin: 0 auto;

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
          __html: data.value.text,
        }}
        style={{ margin: 0 }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: data.value.attr,
        }}
        style={{ margin: 0 }}
      />
    </blockquote>
  );
}
