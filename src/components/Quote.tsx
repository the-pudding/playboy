// import { css } from "@emotion/css";
import { h } from "preact";

import { Quote } from "../types";

export default function Quote({ data }: { data: Quote }) {
  return (
    <blockquote
    // className={css`
    //   padding: 1rem;
    //   font-size: 1.3rem;
    //   max-width: 43rem;
    //   margin: 0 auto;
    // `}
    >
      <p
        dangerouslySetInnerHTML={{
          __html: data.value.text,
        }}
        // className={css`
        //   position: relative;
        //   font-style: italic;
        //   margin: 0;
        //   margin-bottom: 0.5rem;

        //   &::before {
        //     content: "“";
        //     position: absolute;
        //     top: -1rem;
        //     left: -1.5rem;
        //     font-size: 2rem;
        //   }

        //   &::after {
        //     content: "”";
        //     position: absolute;
        //     right: 0;
        //     bottom: -2rem;
        //     font-size: 2rem;
        //   }
        // `}
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
