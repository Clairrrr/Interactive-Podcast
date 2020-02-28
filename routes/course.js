var data = require('../data');

exports.viewCourse = function(req, res) { 
  // controller code goes here 
  var name = req.params.name;
  var professor = req.params.prof;
  var quarter = req.params.quarter;
  	console.log("The course name is: "+name);
    res.render('course', {
        "courseName": name,
        "weeks": [
            {
                "prof": professor,
                "quarter": quarter,
                "courseName": name,
                "name": "Week 1",
                "id": 'one',
                "lecture1": "lecture 1 01-07-2020",
                "lecture2": "lecture 2 01-09-2020",
            },
            {
                "prof": professor,
                "quarter": quarter,
                "courseName": name,
                "name": "Week 2",
                "id": 'two',
                "lecture1": "lecture 3 01-17-2020",
                "lecture2": "lecture 4 01-19-2020",
            },
            {
                "prof": professor,
                "quarter": quarter,
                "courseName": name,
                "name": "Week 3",
                "id": 'three',
                "lecture1": "lecture 5 02-07-2020",
                "lecture2": "lecture 6 02-09-2020",
            },
            {
                "prof": professor,
                "quarter": quarter,
                "courseName": name,
                "name": "Week 4",
                "id": 'four',
                "lecture1": "lecture 7 02-17-2020",
                "lecture2": "lecture 8 02-19-2020",
            },
            {
                "prof": professor,
                "quarter": quarter,
                "courseName": name,
                "name": "Week 5",
                "id": 'five',
                "lecture1": "lecture 9 03-07-2020",
                "lecture2": "lecture 10 03-09-2020",
            },
            {
                "prof": professor,
                "quarter": quarter,
                "courseName": name,
                "name": "Week 6",
                "id": 'six',
                "lecture1": "lecture 11 03-17-2020",
                "lecture2": "lecture 12 03-19-2020",
            },
            {
                "prof": professor,
                "quarter": quarter,
                "courseName": name,
                "name": "Week 7",
                "id": 'seven',
                "lecture1": "lecture 13 03-17-2020",
                "lecture2": "lecture 14 03-19-2020",
            },
            {
                "prof": professor,
                "quarter": quarter,
                "courseName": name,
                "name": "Week 8",
                "id": 'eight',
                "lecture1": "lecture 15 03-17-2020",
                "lecture2": "lecture 16 03-19-2020",
            },
            {
                "prof": professor,
                "quarter": quarter,
                "courseName": name,
                "name": "Week 9",
                "id": 'nine',
                "lecture1": "lecture 17 03-17-2020",
                "lecture2": "lecture 18 03-19-2020",
            },
            {
                "prof": professor,
                "quarter": quarter,
                "courseName": name,
                "name": "Week 10",
                "id": 'ten',
                "lecture1": "lecture 19 03-17-2020",
                "lecture2": "lecture 20 03-19-2020",
            }
        ]
    });
};

exports.viewLecture = function(req, res) {
    var name = req.params.courseName;
    var professor = req.params.prof;
    var quarter = req.params.quarter;
    var week = req.params.week;
    var lecture = req.params.lecture;
    var newData = {
        "prof": professor,
        "quarter": quarter,
        "courseName": name,
        "week": week,
        "lecture": lecture,
        "notes": data.notes
    };
    res.render('lecture', newData);
};

