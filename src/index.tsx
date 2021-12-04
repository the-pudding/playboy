import { hydrate, prerender as ssr } from "preact-iso";

import doc from "./data/doc.json";

export function App() {
  return (
    <>
      <article>
        <h1>{doc.title}</h1>
        <p>{doc.subtitle}</p>

        {doc.intro.map((paragraph, i) => (
          <p
            key={i}
            dangerouslySetInnerHTML={{
              __html: paragraph.value,
            }}
          />
        ))}
      </article>
    </>
  );
}

hydrate(<App />);

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
