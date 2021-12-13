import { hydrate, prerender as ssr } from "preact-iso";
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
  return await ssr(<App {...data} />);
}
