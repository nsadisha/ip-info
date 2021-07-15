const express = require('express')
const app = express()
const router = express.Router()
const ipl = require('ip-locator')
var ip = require('ip');
const serverless = require('serverless-http')

router.get('/', (req, res) => {
  var myip = ip.address()

  ipl.getDomainOrIPDetails(myip,'json', function (err, data) {
    res.json(data)
  })
})
router.get('/ip', (req, res) => {
  var myip = ip.address()
  res.json({"status": "success", "ip": ip})
})
router.get('/:ip', (req, res) => {
  ipl.getDomainOrIPDetails(req.params.ip,'json', function (err, data) {
    res.json(data)
  })
})

app.use('/.netlify/functions/api', router)
module.exports.handler = serverless(app)