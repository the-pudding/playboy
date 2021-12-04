import { hydrate, prerender as ssr } from "preact-iso";
import "preact/debug";

import doc from "./data/doc.json";
import Paragraphs from "./Paragraphs";
import UnitPicker from "./UnitPicker";
import Warning from "./Warning";

import "./global.css";

export function App() {
  return (
    <>
      <article>
        <h1>{doc.title}</h1>
        <p>{doc.subtitle}</p>

        <Paragraphs data={doc.intro} />

        <Warning>
          {doc.warning.map((p, i) => (
            <p
              key={i}
              dangerouslySetInnerHTML={{
                __html: p.value,
              }}
            />
          ))}
        </Warning>

        <Paragraphs data={doc.scrollyIntro} />

        <UnitPicker />
      </article>
    </>
  );
}

hydrate(<App />);

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
