const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(4000, () => console.log('Up on 4000'))
