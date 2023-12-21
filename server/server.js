const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
app.use(express.json())
app.use(cors())

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'bc62195e244f442bb1be3cb207ce5200',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.use(express.static(path.join(__dirname, "../public")))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(4000, () => console.log('Up on 4000'))
