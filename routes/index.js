var data = require('../data');
var page;
var name;

exports.loginA = function(req, res){
  page = 'pageA';
  res.render('index', {"page": page});
};

exports.loginB = function(req, res){
  page = 'pageB';
  res.render('index', {"page": page});
};

exports.home = function(req, res){
  var temp = data;
  temp['name'] = req.params.name;
  if(page.localeCompare("pageA") === 0) temp['page'] = false;
  else temp['page'] = true;
  res.render('home', temp);
};

exports.home_login = function(req, res){
  var temp = data;
  name = req.query.uname;
  temp['name'] = name;

  res.json({'name': req.query.uname});
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
  if(page.localeCompare("pageA") === 0) newData['page'] = false;
  else newData['page'] = true;
  newData['courses'] = [];
  for(var i=0; i<oldData.length; i++){
    if(((oldData[i].number).toLowerCase()).localeCompare(cont.toLowerCase()) === 0){
      newData['courses'].push(oldData[i]);
    }
  }
  res.render('home', newData);
};




