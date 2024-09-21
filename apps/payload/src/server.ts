// eslint-disable-next-line unicorn/prefer-node-protocol
import process from 'process'
import dotenv from 'dotenv'
import express from 'express'
import payload from 'payload'

const app = express()
dotenv.config({ path: '.env' })
async function start() {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET ?? '',
    express: app,
    onInit: async () => {
      // eslint-disable-next-line no-console -- This is a server log
      console.log(`Payload is ready on ${payload.getAdminURL()}`)
    },
  },
  )

  const port = process.env.PORT || 3000

  app.listen(port, async () => {
    // eslint-disable-next-line no-console -- This is a server log
    console.log(
      'Express is now listening for incoming connections on port 3000.',
    )
  })
}

start()
