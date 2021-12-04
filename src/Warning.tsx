import { ComponentChildren, h } from "preact";

export default function Warning({ children }: { children: ComponentChildren }) {
  return <p>{children}</p>;
}
