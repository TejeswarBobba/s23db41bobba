var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var watches_controller = require('../controllers/watches');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// watches ROUTES ///
// POST request for creating a watches. 
router.post('/watches', watches_controller.watches_create_post);
// DELETE request to delete watches.
router.delete('/watches/:id', watches_controller.watches_delete);
// PUT request to update watches.
router.put('/watches/:id', watches_controller.watches_update_put);
// GET request for one watches.
router.get('/watches/:id', watches_controller.watches_detail);
// GET request for list of all watches items.
router.get('/watches', watches_controller.watches_list);
router.get('/detail', watches_controller.watch_view_one_Page);
router.get('/create', watches_controller.watch_create_Page);
router.get('/update', watches_controller.watch_update_Page);
router.get('/delete', watches_controller.watch_delete_Page);

module.exports = router;