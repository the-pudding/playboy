// import { css } from "@emotion/css";
import { ComponentChildren, h } from "preact";

export default function Warning({ children }: { children: ComponentChildren }) {
  return (
    <p
    // className={css`
    //   background-color: var(--base-tan-1);
    //   border: 1px solid var(--base-orange-1);
    //   padding: 0.25rem;
    //   border-radius: 0.5rem;
    //   color: var(--base-off-black);

    //   p {
    //     margin: 0;
    //   }
    // `}
    >
      {children}
    </p>
  );
}
