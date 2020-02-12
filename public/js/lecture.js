'use strict';
$(document).ready(function() {
    initializePage();
});

function initializePage() {
    $('.note').click((e) => {alert("yo")});
    console.log("A");
    // $('#colorBtn').click(randomizeColors);
}

//
// 'use strict';
// $(document).ready(function() {
//     initializePage();
//     console.log("A");
// });
//
// function initializePage() {
//     console.log("B");
//     $("#addNoteForm").submit(handleAddNote);
// };
//
// function handleAddNote() {
//     e.preventDefault();
//     console.log(`inside handleAddNote, note is `);
//     alert("hey");
// };