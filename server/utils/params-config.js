const { v4: uuidv4 } = require('uuid');

const params = fileName => {
  const myFile = fileName.originalname.split('.');
  const fileType = myFile[myFile.length - 1];

  const imageParams = {
    Bucket: 'user-images-858b7268-ccd8-4ba0-b2b4-d284433458e9',
    Key: `${uuidv4()}.${fileType}`,
    Body: fileName.buffer,
    ACL: 'public-read'
  };

  return imageParams;
};

module.exports = params;