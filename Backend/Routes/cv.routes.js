const express = require('express');
const router = express.Router();
const Cv = require('../models/cv.model');
const upload = require('../multer-config');

// Upload a CV and save its URL to the database
router.post('/cv', upload, async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }

    const newCv = new Cv({
      CvUrl: req.file.path,
    });

    await newCv.save();
    res.status(201).json(newCv);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
