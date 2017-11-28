const express = require ('express');
let router = express.Router();

router.use('/hello', require('./route'));
router.use('/filters', require('./filteredRoutes'));

module.exports = router;