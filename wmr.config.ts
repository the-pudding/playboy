import { defineConfig } from "wmr";

// Full list of options: https://wmr.dev/docs/configuration
export default defineConfig({
  /* Your configuration here */
  alias: {
    react: "preact/compat",
    "react-dom": "preact/compat",
  },
  root: `${process.cwd()}/src`,
  // visualize: true,
  middleware: [],
});
