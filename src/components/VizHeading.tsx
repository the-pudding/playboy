import { h } from "preact";

export default function VizHeading({
  data: { title, subtitle },
}: {
  data: {
    title: string;
    subtitle: string;
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
    </div>
  );
}
