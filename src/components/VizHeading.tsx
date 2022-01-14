import { h } from "preact";

export default function VizHeading({
  data: { title, subtitle, caption },
}: {
  data: {
    title: string;
    subtitle: string;
    caption: string;
  };
}) {
  return (
    <div>
      <h3
        style={{
          marginBottom: 0,
          fontSize: "1.2rem",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          marginTop: 0,
          fontSize: "1rem",
          fontStyle: "italic",
        }}
        dangerouslySetInnerHTML={{
          __html: subtitle,
        }}
      />
      <figcaption style={{ display: "none" }}>{caption}</figcaption>
    </div>
  );
}
