// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://marcinursynow2024-png.github.io',
  base: '/marcin-chylek-dev',
  integrations: [react()],
});
