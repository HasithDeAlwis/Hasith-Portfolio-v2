import path from 'node:path'
import type { StorybookConfig } from '@storybook/svelte-vite'

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|ts|svelte)'],
  addons: [
    '@storybook/addon-svelte-csf',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/svelte-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    return {
      ...config,
      resolve: {
        alias: [
          {
            find: '$lib',
            replacement: path.resolve(__dirname, '../src'),
          },
          {
            find: '@components',
            replacement: path.resolve(__dirname, '../../website/src/components'),
          },
          {
            find: '@shadcn',
            replacement: path.resolve(__dirname, '../../website/src/components/ui'),
          },
          {
            find: '@types',
            replacement: path.resolve(__dirname, '../../website/src/types'),
          },
        ],
      },
    }
  },
}
export default config
