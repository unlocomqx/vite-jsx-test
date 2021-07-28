import { svelte } from "@sveltejs/vite-plugin-svelte";
import svelteJsx from "vite-svelte-jsx";

export default {
  define: {
    "process.env": {},
    "global": {}
  },
  resolve: {
    alias: {
      "$lib": "/src/lib/",
    },
  },
  plugins: [
    svelte(),
    svelteJsx({}),
  ],
};
