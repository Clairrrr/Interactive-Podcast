
/*
 * GET home page.
 */
var data = require('../data');

exports.view = function(req, res){
  res.render('index', data);
};



