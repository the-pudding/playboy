import { defineConfig } from "wmr";
import { createFilter } from "@rollup/pluginutils";

// Full list of options: https://wmr.dev/docs/configuration
export default defineConfig({
  /* Your configuration here */
  alias: {
    react: "preact/compat",
    "react-dom": "preact/compat",
  },
  root: `${process.cwd()}/src`,
  out: `${process.cwd()}/docs`,
  publicPath: "/playboy/",
  visualize: process.env.VIZ === "true",
  // middleware: [],
  plugins: [csv()],
});

function csv() {
  const filter = createFilter(/.+\.csv/, undefined);
  return {
    name: "csv",
    transform(code, id) {
      if (!filter(id)) return null;
      return {
        code: `export default ${JSON.stringify(code)}`,
        map: null,
      };
    },
  };
}
