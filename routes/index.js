
/*
 * GET home page.
 */
var data = require('../data');

exports.login = function(req, res){
  res.render('index');
};

exports.home = function(req, res){
  let temp = data;
  temp['name'] = req.params.name;
  res.render('home', temp);
};




