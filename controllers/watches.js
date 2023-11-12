var watches = require('../models/watches');
// List of all watchess
// exports.watches_list = function(req, res) {
//  res.send('NOT IMPLEMENTED: watches list');
// };

// List of all watchess
exports.watches_list = async function (req, res) {
    try {
        var thewatches = await watches.find();
        res.send(thewatches);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific watches.
// exports.watches_detail = function (req, res) {
//     res.send('NOT IMPLEMENTED: watches detail: ' + req.params.id);
// };

exports.watches_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await watches.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
   
// Handle watches create on POST.
// exports.watches_create_post = function (req, res) {
//     res.send('NOT IMPLEMENTED: watches create POST');
// };

// Handle watch create on POST.
exports.watch_create_post = async function(req, res) {
    console.log(req.body)
    let document = new watch();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"watch_type":"goat", "cost":12, "size":"large"}
    document.Name = req.body.Name;
    document.Model = req.body.Model;
    document.Price = req.body.Price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   }


// Handle watches delete form on DELETE.
exports.watches_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: watches delete DELETE ' + req.params.id);
};
// Handle watches update form on PUT.
exports.watches_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: watches update PUT' + req.params.id);
};


// VIEWS
// Handle a show all view
exports.watches_view_all_Page = async function (req, res) {
    try {
        thewatches = await watches.find();
        res.render('watches', { title: 'watches Search Results', results: thewatches });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


