import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';

const sitesStatic = process.env.SITES_STATIC_BUILD === '1';

export default defineConfig({
  site: 'https://ahmadfarooq.vercel.app',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap(), react(), ...(sitesStatic ? [] : [keystatic()])],
});
