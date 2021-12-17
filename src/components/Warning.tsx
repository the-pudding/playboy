import { ComponentChildren, h } from "preact";

export default function Warning({ children }: { children: ComponentChildren }) {
  return (
    <p
      style={{
        backgroundColor: "var(--color-warning)",
        padding: "0.5rem 1rem",
        color: "var(--color-text)",
        maxWidth: "100%",
      }}
    >
      {children}
    </p>
  );
}
