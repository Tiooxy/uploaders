const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require("fs")

const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/temp/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.use('/uploads', express.static('uploads'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    res.status(200).json({
      name: req.file.filename,
      original: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size,
      url: `${req.protocol}://${req.hostname == 'localhost' ? 'localhost:' + port : req.hostname}/file/` + req.file.filename,
    })
  } catch (e) {
    res.status(404).json({
      status: 404,
      message: "An error occurred while uploading the file."
    })
  }
});

app.get('/file/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'public/temp', filename);

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).json({ 
      status: 404,
      message: 'File not found' 
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});