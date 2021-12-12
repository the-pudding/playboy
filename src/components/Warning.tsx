import { ComponentChildren, h } from "preact";

export default function Warning({ children }: { children: ComponentChildren }) {
  return (
    <p
      style={{
        backgroundColor: "var(--t1-2)",
        padding: "0.5rem 1rem",
        borderRadius: "0.5rem",
        color: "var(--base-white)",
      }}
    >
      {children}
    </p>
  );
}
