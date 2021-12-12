import { ComponentChildren, h } from "preact";

export default function Warning({ children }: { children: ComponentChildren }) {
  return (
    <p
      style={{
        backgroundColor: "var(--base-tan-1)",
        border: "1px solid var(--base-orange-1)",
        padding: "0.25rem",
        borderRadius: "0.5rem",
        color: "var(--base-off-black)",
      }}
    >
      {children}
    </p>
  );
}
