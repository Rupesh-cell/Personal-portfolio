const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file format. Only PDF files are allowed.'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = (req, res, next) => {
  // Delete old file if updating CV
  if (req.file) {
    const oldFilePath = req.body.oldFilePath; // Adjust this field name according to your request
    if (oldFilePath) {
      fs.unlink(oldFilePath, (err) => {
        if (err) {
          console.error('Error deleting old file:', err);
        }
      });
    }
  }

  // Continue with Multer middleware
  upload.single('CvUrl')(req, res, next);
};