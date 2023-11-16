var express = require('express');
const watches_controlers= require('../controllers/watches');
var router = express.Router();
/* GET watchess */
router.get('/', watches_controlers.watches_view_all_Page );
router.get('/detail', watches_controlers.watch_view_one_Page);
router.get('/create', watches_controlers.watch_create_Page);
router.get('/update', watches_controlers.watch_update_Page);

module.exports = router;