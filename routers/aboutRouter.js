const aboutController = require ('../controllers/aboutController.js');
const express = require ('express');
const router = express.Router();

router.get ('/about',aboutController.about);

module.exports = router;