const multer = require('multer');
const path = require('path');
const File = require('../models/file');
const {v4: uuidv4} = require('uuid');

const router = require('express').Router();

// multer basic config
let storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'backend/uploads/'),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
    cb(null, uniqueName)
  },
});

let upload = multer({storage, limits: {fileSize: 1000000 * 50}, }).single('myfile'); //50mb

router.post('/', (req, res) => {
  upload(req, res, async (err) => {
    // validate request
    if (err) {
      return res.status(500).send({error: err.message});
    }
    if (!req.file) {
      return res.json({error: 'All feilds are required'});
    }
    const file = new File({
      filename: req.file.filename,
      uuid: uuidv4(),
      path: req.file.path,
      size: req.file.size
    });
    const response = await file.save();
    res.json({file: `${process.env.APP_BASE_URL}/files/${response.uuid}`});
  });
});

module.exports = router;
