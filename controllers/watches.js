var watches = require('../models/watches');
// List of all watchess
exports.watches_list = function(req, res) {
 res.send('NOT IMPLEMENTED: watches list');
};
// for a specific watches.
exports.watches_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: watches detail: ' + req.params.id);
};
// Handle watches create on POST.
exports.watches_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: watches create POST');
};
// Handle watches delete form on DELETE.
exports.watches_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: watches delete DELETE ' + req.params.id);
};
// Handle watches update form on PUT.
exports.watches_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: watches update PUT' + req.params.id);
};