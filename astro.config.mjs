import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { astroImageTools } from 'astro-imagetools';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://jamesperkins.dev',
  syntaxHighlight: 'prism',
  integrations: [react(), sitemap(), mdx(), tailwind(), astroImageTools]
});
