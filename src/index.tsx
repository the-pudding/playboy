import { h, render } from "preact";
import Thing from "./Thing";

if (module.hot) {
  module.hot.accept();
  require("preact/debug");
}

export default function Article() {
  return (
    <div>
      hello! <Thing />
    </div>
  );
}

render(<Article />, document.querySelector("#app")!);
