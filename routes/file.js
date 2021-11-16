const File = require('../models/File');
const express = require('express');
const router = express.Router();
const multer = require('multer');

const createFile = async (req, res) => {};
const getFileById = async (req, res) => {
    const 
};
const getAllFile = async (req, res) => {};
const DeleteFileById = async (req, res) => {};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

router.route('/create', upload.single('upload_file')).post(createFile);
router.route('/getFile/:id').get(getFileById);
router.route('/getAll').get(getAllFile);
router.route('/delete/:id').delete(DeleteFileById);
module.exports = router;
