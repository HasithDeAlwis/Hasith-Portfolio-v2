import process from 'node:process'
import { loadEnv } from 'vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/tests/unit/**/*.ts'],
    name: 'Hasith Portfolio Unit Tests',
    environment: 'jsdom',
    env: loadEnv('test', process.cwd(), ''),
  },
})
