import { hydrate, prerender as ssr } from "preact-iso";
import { useHead, useLink, toStatic } from "hoofd";
// import "preact/debug";

import doc from "./data/doc.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Paragraphs from "./components/Paragraphs";
import UnitPicker from "./components/UnitPicker";
import Warning from "./components/Warning";
import Scrolly from "./components/Scrolly";
import Hourglass from "./components/Hourglass";
import MostAverage from "./components/MostAverage";

import "normalize.css/normalize.css";
import "./global.css";

export function App() {
  useHead({
    title: doc.title,
    metas: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { httpEquiv: "Content-Type", content: "text/html; charset=utf-8" },
      { name: "description", content: "DESCRIPTION HERE" },
      { name: "author", content: "The Pudding" },

      { property: "og:title", content: doc.title },
      { property: "og:site_name", content: "The Pudding" },
      { property: "og:url", content: "THE URL HERE" },
      { property: "og:description", content: "DESCRIPTION HERE" },
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: "THE IMAGE URL HERE" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "https://thepudding.cool" },
      { name: "twitter:creator", content: "@puddingviz" },
      { name: "twitter:title", content: doc.title },
      { name: "twitter:description", content: "DESCRIPTION HERE" },
      { name: "twitter:image", content: "THE IMAGE URL HERE" },

      { name: "robots", content: "max-image-preview:large" },
    ],
  });
  useLink({ rel: "canonical", href: "THE URL HERE" });

  return (
    <>
      <Header />

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

        <Scrolly sections={doc.scrolly} />

        <UnitPicker />

        <Hourglass data={doc.hourglass} />

        <MostAverage data={doc.mostAverage} />

        <h2>{doc.outro[0].value}</h2>
        <Paragraphs data={doc.outro.slice(1)} />

        <hr style={{ maxWidth: "43rem", margin: "3rem auto" }} />

        <h2
          style={{
            fontSize: "1.1rem",
          }}
        >
          {doc.methodology[0].value}
        </h2>
        <Paragraphs
          data={doc.methodology.slice(1)}
          style={{
            fontSize: "0.9rem",
          }}
        />
      </article>

      <Footer />
    </>
  );
}

hydrate(<App />);

export async function prerender(data) {
  const result = await ssr(<App {...data} />);

  const head = toStatic();
  const elements = new Set([
    ...head.links.map((props) => ({ type: "link", props })),
    ...head.metas.map((props) => ({ type: "meta", props })),
    ...head.scripts.map((props) => ({ type: "script", props })),
  ]);

  // Return the results back to WMR
  return {
    ...result,
    head: {
      lang: head.lang,
      title: head.title,
      elements,
    },
  };
}
