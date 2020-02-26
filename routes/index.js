var data = require('../data');
var page;
var name;

exports.login = function(req, res){
  page = req.params.page;
  res.render('index', {"page": page});
};

exports.home = function(req, res){
  console.log("there");
  var temp = data;
  temp['name'] = req.params.name;
  if(page.localeCompare("pageA") === 0) temp['page'] = false;
  else temp['page'] = true;
  res.render('home', temp);
};

exports.home_login = function(req, res){
  var temp = data;
  temp['name'] = req.query.uname;
  // temp['page'] = req.params.name.localeCompare('A') === 0;
  name = req.query.uname;

  console.log("here");
  res.json({'name': req.query.uname, 'page': page});
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




