import { hydrate, prerender as ssr } from "preact-iso";

// if (process.env.NODE_ENV === "development") {
//   require("preact/debug");
// }

import doc from "./data/doc.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Paragraphs from "./components/Paragraphs";
import UnitPicker from "./components/UnitPicker";
import Scrolly from "./components/Scrolly";
import Warning from "./components/Warning";

import "normalize.css/normalize.css";
import "./global.css";

export function App() {
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
      </article>

      <Footer />
    </>
  );
}

hydrate(<App />);

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
