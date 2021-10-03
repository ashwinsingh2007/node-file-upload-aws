const express = require('express')
const router = express.Router()
const { fetchPresignedUrl } = require('../s3-fileupload/s3UploadClient')

router.get('/get-presigned-url', (req, res) => {
  const url = fetchPresignedUrl(req.query);
  res.status(201).json({
    url
  })
})

module.exports = router
