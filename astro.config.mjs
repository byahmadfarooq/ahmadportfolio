import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://ahmadfarooq.vercel.app',
  output: 'static',
  adapter: vercel(),
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap(), react(), keystatic()],
});
