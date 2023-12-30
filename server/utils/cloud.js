```javascript
// Import required modules
const AWS = require('aws-sdk');
const fs = require('fs');

// Configure AWS SDK
AWS.config.update({
  region: 'us-west-2',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

// Create S3 service object
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Function to upload a file to S3
const uploadFile = (filePath, bucketName, keyName) => {
  // Read content from the file
  const fileContent = fs.readFileSync(filePath);

  // Setting up S3 upload parameters
  const params = {
    Bucket: bucketName,
    Key: keyName, // File name you want to save as in S3
    Body: fileContent
  };

  // Uploading files to the bucket
  s3.upload(params, function(err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);
  });
};

// Function to download a file from S3
const downloadFile = (filePath, bucketName, keyName) => {
  const params = {
    Bucket: bucketName,
    Key: keyName
  };

  s3.getObject(params, function(err, data) {
    if (err) console.error(err);
    fs.writeFileSync(filePath, data.Body.toString());
    console.log(`${filePath} has been created!`);
  });
};

module.exports = {
  uploadFile,
  downloadFile
};
```
