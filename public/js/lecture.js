// $(document).ready(function() {
//     console.log("B");
//     initializePage();
// });
//
// function initializePage() {
//     $('.note').click((e) => {alert("yo")});
//     console.log("A");
//     // $('#colorBtn').click(randomizeColors);
// }

'use strict';
$(document).ready(function() {
    initializePage();
    console.log("A");
});

function initializePage() {
    console.log("B");
    $("#addNoteForm").submit(handleAddNote);
    $(".note a").click(handleResume);
};

function handleAddNote(e) {
    e.preventDefault();
    $.ajax({
        url: $('#addNoteForm').attr('action'),
        type: 'get',
        data : $('#addNoteForm').serialize(),
        success: function(res){
            console.log(`form submitted. ${res} end`);
            let vid = document.getElementById("videoID");
            let time = vid.currentTime;
            // alert("time: "+time);
            $("#notesdiv").append(generateHTML(res, time));
            console.log("time is "+time);
        }
    });
    e.preventDefault();
    console.log(`inside handleAddNote, note is ${e}`);
};

function generateHTML(note, time) {
    let a1 = `<a href="" class="note"><p id="content">${note}</p>`;
    let a2 = `<p id="timestamp">${time}</p></a>`;
    let a3 = `<a href="#" class="deleteNote"><i class="fa fa-trash"></i></a><br>`;
    return a1 + a2 + a3;
}

function handleResume(e) {
    console.log("inside resume");
    alert("in resume");
    let vid = document.getElementById("videoID");
    vid.currentTime = $("#timestamp").text;
    alert("finish setting");
    e.preventDefault();
}