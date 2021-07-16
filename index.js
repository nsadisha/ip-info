const express = require('express')
const app = express()
const ipl = require('ip-locator')

app.get('/', (req, res) => {
  res.json({"Hello": "hi"})
})

app.listen(process.env.port || 3000, ()=>{
  console.log("listening for requests")
})