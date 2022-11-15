import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { remarkReadingTime } from "./src/utils/reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://rithul.dev",
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [rehypeAutolinkHeadings],
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: "solarized-dark"
    }
  },
  integrations: [react(), tailwind(), mdx(), prefetch()]
});