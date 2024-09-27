/* eslint-disable node/prefer-global/process */
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage'
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3'
import CurrentlyLearning from './collections/skills/currently-learning'
import User from './collections/user/user'
import Media from './collections/media/media'

const adapter = s3Adapter({
  config: {
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
    },
    endpoint: process.env.S3_ENDPOINT || '',
    region: process.env.S3_REGION || 'us-east-1',
  },
  bucket: process.env.S3_BUCKET || '',
})

// Ideally Vite would be used for the better dev experience, faster HMR, and faster build times
// However, the Vite bundler with Payload is not at a point where it can be used relliably in production apps
// However, swithcing between Vite and Webpack is not difficult
// TODO: Switch to Vite when the viteBundler is in a better state
export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_EXTERNAL_SERVER_URL ?? '',
  collections: [User, CurrentlyLearning, Media],
  admin: {
    user: User.slug,
    bundler: webpackBundler(),
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
  plugins: [
    cloudStorage({

      enabled: true,
      collections: {
        media: {

          prefix: 'media',
          adapter,
          disableLocalStorage: true,
        },
      },
    },
    ),
  ],
})
