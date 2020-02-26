var data = require('../data');

var name;

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

  name = req.query.uname;

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

exports.search = function(req, res){
  var cont = req.params.cont;
  var oldData = data['courses'];
  var newData = {};
  newData['courses'] = [];
  for(var i=0; i<oldData.length; i++){
    if(((oldData[i].number).toLowerCase()).localeCompare(cont.toLowerCase()) === 0){
      newData['courses'].push(oldData[i]);
    }
  }
  res.render('home', newData);
};




