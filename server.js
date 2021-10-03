const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const server = express()
console.log('S3 BUCKET', process.env.AWS_S3_BUCKET)

server.use(bodyParser.json())
server.use(express.static('public'))

server.use('/', [
  require('./routes/fileupload')
])

server.listen(7086, error => {
  if (error) console.error('Error starting', error)
  else console.log('Started at http://localhost:7086')
})