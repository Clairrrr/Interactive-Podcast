var fs = require('fs');
var data = require('../data');
var lecture = require('./course');

exports.viewCourse = function(req, res) { 
  // controller code goes here 
  var name = req.params.name;
    res.render('course', {"courseName": name});
};

exports.addNote = function (req, res) {
    console.log("inside addNote");
    var note = req.query.note;
    data.notes.push({
        "content": note,
        "timestamp": "60:01",
    });
    fs.writeFile("data.json", JSON.stringify(data), function (err) {
        if(err) {console.log("error: "+err); return;}
        console.log("finish writing to file");
    });
    lecture.viewLecture(req, res);
};