import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

export default defineConfig({
  output: 'static',
  integrations: [
    svelte(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
