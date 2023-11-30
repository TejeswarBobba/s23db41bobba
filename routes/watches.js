var express = require('express');
const watches_controlers= require('../controllers/watches');
var router = express.Router();
// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
    });
/* GET watchess */
router.get('/', secured, watches_controlers.watches_view_all_Page );
router.get('/detail',secured, watches_controlers.watch_view_one_Page);
router.get('/create', secured,watches_controlers.watch_create_Page);
router.get('/update',secured, watches_controlers.watch_update_Page);
router.get('/delete',secured, watches_controlers.watch_delete_Page);

module.exports = router;