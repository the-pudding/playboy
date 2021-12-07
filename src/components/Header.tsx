import { h } from "preact";

import Wordmark from "./Wordmark";

export default function Header() {
  return (
    <header>
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
          }}
        >
          <Wordmark />
        </a>
      </div>
    </header>
  );
}