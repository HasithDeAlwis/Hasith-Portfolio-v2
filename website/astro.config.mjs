import netlify from '@astrojs/netlify'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [
    svelte(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
