const File = require('../models/File');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const createFile = async (req, res) => {
  const { filename } = req.file;
  try {
    const success = await File.create({
      FileName: req.body.name,
      FilePathName: filename,
      FileDocName: req.body.docNumber,
    });
    console.log(success);
    res.status(200).json(success);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getFileById = async (req, res) => {
  res.download(path.resolve('Filestorage', req.params.id));
};
const getAllFile = async (req, res) => {
  try {
    const allFile = await File.find();
    res.status(200).json(allFile);
  } catch (error) {
    res.status(500).json(error);
  }
};
const DeleteFileById = async (req, res) => {
  try {
    await File.findByIdAndDelete(req.params.id);
    res.status(200).json('deleted');
  } catch (error) {
    res.status(500).json(error);
  }
};

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

router.post('/create', upload.single('uploadFile'), createFile);
router.route('/getFile/:id').get(getFileById);
router.route('/getAllFile').get(getAllFile);
router.route('/delete/:id').delete(DeleteFileById);
module.exports = router;
