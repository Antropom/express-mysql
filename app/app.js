require('dotenv').config()
const express = require('express')

const app = express()
const cors = require('cors')

const PORT = process.env.PORT

// Import route files here

app.use(express.json())
app.use(cors())
// prettier-ignore
app.use(
  express.urlencoded({
    extended: true,
  }),
);

// Add app.use here

const server = app.listen(PORT, () => {
  console.log(`🌍 Server is running on port ${PORT}`)
})

module.exports = server
