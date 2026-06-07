// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

const repoBase = '/marcin-chylek-dev';

export default defineConfig({
  site: 'https://marcinursynow2024-png.github.io',
  base: process.env.NODE_ENV === 'development' ? '/' : repoBase,
  trailingSlash: 'always',
  integrations: [react()],
});
