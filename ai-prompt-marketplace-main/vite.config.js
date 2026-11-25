import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { nav, prompts, cart } from './src/data/site.js';

const page = (name) => fileURLToPath(new URL(`./src/${name}.html`, import.meta.url));

export default defineConfig({
  server: { port: 5173, open: true },
  preview: { port: 4173 },
  root: 'src',
  base: './',
  publicDir: '../public',
  plugins: [ViteEjsPlugin({ nav, prompts, cart })],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        index: page('index'),
        catalog: page('catalog'),
        prompt: page('prompt'),
        cart: page('cart'),
      },
    },
  },
});
