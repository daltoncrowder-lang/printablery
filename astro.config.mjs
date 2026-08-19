import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://printablery.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
