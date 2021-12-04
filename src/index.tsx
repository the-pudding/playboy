import { hydrate, prerender as ssr } from "preact-iso";
import { useState } from "preact/hooks";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section>
        <h1>Home</h1>
        <p>This is the home page.</p>
        <>
          <button style={{ width: 30 }} onClick={() => setCount(count - 1)}>
            -
          </button>
          <output style={{ padding: 10 }}>Count: {count}</output>
          <button style={{ width: 30 }} onClick={() => setCount(count + 1)}>
            +
          </button>
        </>
      </section>
    </>
  );
}

hydrate(<App />);

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
