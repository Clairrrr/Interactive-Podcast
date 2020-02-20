
/*
 * GET home page.
 */
var data = require('../data');

exports.login = function(req, res){
  res.render('index');
};

exports.home = function(req, res){
  var temp = data;
  temp['name'] = req.params.name;
  res.render('home', temp);
};

exports.home_login = function(req, res){
  var temp = data;
  temp['name'] = req.query.uname;
  console.log("handle login!");
  // res.render('home', temp);
    res.json(req.query.uname);
};

exports.signup = function(req, res){
  res.render('signup');
};




