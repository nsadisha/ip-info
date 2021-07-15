const express = require('express')
const app = express()
const ipl = require('ip-locator')
const port = 3000

app.get('/', (req, res) => {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress

  ipl.getDomainOrIPDetails(ip,'json', function (err, data) {
    res.json(data)
  })
})
app.get('/:ip', (req, res) => {
  ipl.getDomainOrIPDetails(req.params.ip,'json', function (err, data) {
    res.json(data)
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})