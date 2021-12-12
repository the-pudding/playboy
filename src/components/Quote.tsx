import { h } from "preact";

import { Quote } from "../types";

export default function Quote({ data }: { data: Quote }) {
  return (
    <blockquote
      style={{
        padding: "1rem",
        fontSize: "1.3rem",
        maxWidth: "43rem",
        margin: "0 auto",
      }}
    >
      <p
        dangerouslySetInnerHTML={{
          __html: data.value.text,
        }}
        style={{
          position: "relative",
          fontStyle: "italic",
          margin: 0,
          marginBottom: "0.5rem",
        }}
        className="quote"
      />
      <p
        dangerouslySetInnerHTML={{
          __html: `- ${data.value.attr}`,
        }}
        style={{ margin: 0 }}
      />
    </blockquote>
  );
}
