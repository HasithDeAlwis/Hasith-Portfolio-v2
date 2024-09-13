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
  cors: process.env.WHITELIST_ORIGINS ? process.env.WHITELIST_ORIGINS.split(',') : [],
  csrf: process.env.WHITELIST_ORIGINS ? process.env.WHITELIST_ORIGINS.split(',') : [],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI ?? '',
    },
  }),
  editor: slateEditor({}),
  graphQL: {
    disable: false,
  },
})
