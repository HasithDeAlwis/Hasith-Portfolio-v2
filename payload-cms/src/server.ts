import express from 'express'

const app = express()

app.listen(3000, async () => {
  // eslint-disable-next-line no-console -- This is a server log
  console.log(
    'Express is now listening for incoming connections on port 3000.',
  )
})
