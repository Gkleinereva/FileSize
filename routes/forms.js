var express = require('express');
var router = express.Router();
var controller = require('../controllers/filecontroller');
var multer = require('multer');
//var upload = multer({ dest: 'uploads/' });
var upload = multer();

/* GET home page. */
router.get('/', controller.GetFile);

//Here, we pass 2 peices of middleware to the router.
// The first one is provided by multer and updates the req object
// The second one is our controller function
router.post('/', upload.single('file'), controller.PostFile);

module.exports = router;