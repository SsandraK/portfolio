import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import github from "@astrojs/github";

export default defineConfig({
  site: 'https://sandra.github.io', 
  base: '/', 
  output: "static",
  adapter: github(),  
  integrations: [tailwind()],
});
