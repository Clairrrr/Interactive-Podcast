var data = require('../data');

var name;

exports.login = function(req, res){
  res.render('index');
};

exports.home = function(req, res){
  var temp = data;
  console.log("here!");
  temp['name'] = req.params.name;
  res.render('home', temp);
};

exports.home_login = function(req, res){
  var temp = data;
  temp['name'] = req.query.uname;
  console.log("handle login!");

  name = req.query.uname;

  // res.render('home', temp);
    res.json(req.query.uname);
};

exports.signup = function(req, res){
  res.render('signup');
};

exports.profile = function(req, res){
  var info = {};
  info['name'] = name;
  res.render('profile', info);
};




