const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Fuck you')
})

app.listen(8080)
