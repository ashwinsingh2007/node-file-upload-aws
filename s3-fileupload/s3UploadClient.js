var AWS = require('aws-sdk');
var s3 = new AWS.S3({
  signatureVersion: 'v4',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_DEFAULT_REGION
});


exports.fetchPresignedUrl = (params) => {
  const bucketName = process.env.AWS_S3_BUCKET
  const folder = params.bucket;
  let key = '';
  if(folder) {
    key = `${folder}/`;
  }
  key = `${key}${params.filename}`;
  const signedUrlExpireSeconds = 60 * 60;
  const url = s3.getSignedUrl('putObject', {
    Bucket: bucketName,
    Key: key,
    ACL:"public-read",
    Expires: signedUrlExpireSeconds,
  });
  return {
    url,
    fileUrlAfterUpload: `https://s3.amazonaws.com/files.radiusagent.com/${key}`
  };
};