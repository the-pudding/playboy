import { h } from "preact";

export default function Paragraphs({
  data,
}: {
  data: { type: string; value: string }[];
}) {
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
