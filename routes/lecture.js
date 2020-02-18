var fs = require('fs');
var data = require('../data');
var lecture = require('./course');

exports.viewCourse = function(req, res) { 
  // controller code goes here 
  var name = req.params.name;
  res.render('course', {"courseName": name});
};

exports.addNote = function (req, res) {
    var note = req.query.note;
    var time = req.params.time;
    data['notes'][note] = time;
    var json = JSON.stringify(data);
    fs.writeFile('data.json', json, 'utf8', ()=>{});
    res.json(note);
    lecture.viewLecture(req, res);
};

exports.deleteNote = function (req, res) {
    var del = req.params.content;
    console.log("delete: "+data['notes'][del]);
    delete data['notes'][del];
    console.log("delete: "+data['notes'][del]);
    var json = JSON.stringify(data);
    fs.writeFile('data.json', json, 'utf8', ()=>{});
    lecture.viewLecture(req, res);
};