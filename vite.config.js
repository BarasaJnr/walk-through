import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { viteStaticHtml } from "vite-plugin-static-html";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: [".."],
    },
  },
};

export default defineConfig({
  plugins: [viteStaticHtml({
    dir: 'public',
  }),
  ],
});
