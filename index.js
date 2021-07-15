const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  var ip = req.connection.remoteAddress
  res.json({"status":"success","message":"Hello World!","data":ip})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})