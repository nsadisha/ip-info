const express = require('express')
const app = express()
const router = express.Router()
const ipl = require('ip-locator')
const serverless = require('serverless-http')

router.get('/',(req, res, next) => {
  var myip = req.headers['x-forwarded-for'] || req.connection.remoteAddress

  ipl.getDomainOrIPDetails(myip,'json', function (err, data) {
    res.json(data)
  })
})
router.get('/ip',(req, res, next) => {
  var myip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  res.json({"status": "success", "date": Date(), "ip": myip})
})
router.get('/:ip', (req, res) => {
  ipl.getDomainOrIPDetails(req.params.ip,'json', function (err, data) {
    res.json(data)
  })
})

app.use('/.netlify/functions/api', router)
module.exports.handler = serverless(app)