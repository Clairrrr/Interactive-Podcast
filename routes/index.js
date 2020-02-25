var fs = require('fs');
var data = require('../data');
var user = require('../user');

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

  var temp2 = {};
  temp2['name'] = req.query.uname;
  var json = JSON.stringify(temp2);
  console.log(json);
  fs.writeFileSync('user.json', json);

  // res.render('home', temp);
    res.json(req.query.uname);
};

exports.signup = function(req, res){
  res.render('signup');
};

exports.profile = function(req, res){
  var info = {}
  info['name'] = user['name'];
  res.render('profile', info);
};




