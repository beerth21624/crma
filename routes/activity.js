const Activity = require('../models/Activity');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const createPost = async (req, res) => {};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './FileStorage');
  },
  filename: function (req, file, cb) {
    console.log('name', file);
    let extArray = file.mimetype.split('/');
    let extension = extArray[extArray.length - 1];
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `crma--${file.fieldname}--${uniqueSuffix}.${extension}`);
  },
});

const upload = multer({ storage: storage });

router.post('/create', upload.single('uploadFile'), createPost);

module.exports = router;
