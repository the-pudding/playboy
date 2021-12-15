import { ComponentChildren, h } from "preact";

export default function Warning({ children }: { children: ComponentChildren }) {
  return (
    <p
      style={{
        backgroundColor: "var(--color-warning)",
        padding: "0.5rem 1rem",
        borderRadius: "0.5rem",
        color: "var(--color-text)",
      }}
    >
      {children}
    </p>
  );
}
