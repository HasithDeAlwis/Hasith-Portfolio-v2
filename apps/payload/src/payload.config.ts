/* eslint-disable node/prefer-global/process */
import { viteBundler } from '@payloadcms/bundler-vite'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'
import CurrentlyLearning from './collections/skills/currently-learning'
import User from './collections/user/user'

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_EXTERNAL_SERVER_URL ?? '',
  collections: [User, CurrentlyLearning],
  admin: {
    user: User.slug,
    bundler: viteBundler(),
  },
  cors: process.env.CORS_WHITELIST_ORIGINS ? process.env.CORS_WHITELIST_ORIGINS.split(',') : [],
  csrf: process.env.CSRF_WHITELIST_ORIGINS ? process.env.CSRF_WHITELIST_ORIGINS.split(',') : [],
  db: postgresAdapter({
    migrationDir: process.env.NODE_ENV === 'production' ? './www/migrations' : './apps/payload/src/migrations',
    pool: {
      connectionString: process.env.DATABASE_URI ?? '',
    },
  }),
  editor: slateEditor({}),
  graphQL: {
    disable: false,
  },
})
