import { h } from "preact";

import Wordmark from "./Wordmark";

export default function Header() {
  return (
    <header role="banner">
      <div
        style={{
          maxWidth: "10rem",
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <a
          href="https://pudding.cool"
          aria-label="The Pudding"
          style={{
            display: "block",
            flex: "1 0 auto",
            width: "100%",
          }}
        >
          <Wordmark />
        </a>
      </div>
    </header>
  );
}
