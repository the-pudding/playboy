import { h } from "preact";

export interface Paragraph {
  type: "text";
  value: string;
}

export default function Paragraphs({ data }: { data: Paragraph[] }) {
  return (
    <>
      {data.map((p, i) => (
        <p
          key={i}
          dangerouslySetInnerHTML={{
            __html: p.value,
          }}
        />
      ))}
    </>
  );
}
