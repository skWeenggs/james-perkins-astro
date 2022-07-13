import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://marvelous-chaja-b4437a.netlify.app',
  syntaxHighlight: 'prism',
  integrations: [react(), sitemap(), mdx(), tailwind()]
});
