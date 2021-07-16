const express = require('express')
const app = express()
const ipl = require('ip-locator')

app.get('/',(req, res, next) => {
  var myip = req.headers['x-forwarded-for'] || req.connection.remoteAddress

  ipl.getDomainOrIPDetails(myip,'json', function (err, data) {
    res.json(data)
  })
})
app.get('/ip',(req, res, next) => {
  var myip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  res.json({"status": "success", "date": Date(), "ip": myip})
})
app.get('/:ip', (req, res) => {
  ipl.getDomainOrIPDetails(req.params.ip,'json', function (err, data) {
    res.json(data)
  })
})

app.listen(process.env.port || 3000, ()=>{
  console.log("listening for requests")
})