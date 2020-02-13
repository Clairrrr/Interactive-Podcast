'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $("#loginForm").submit(handleLogin);
}

function handleLogin(e) {
	e.preventDefault();
	$.ajax({
		url: $("#loginForm").attr('action'),
		type: 'get',
		data: $("#loginForm").serialize(),
		success: function (res) {
		    try {
				window.location.href = `http://localhost:3000/home/${res}`;
			}catch (e) {
				window.location.href = `https://interactive-podcast.herokuapp.com/home/${res}`;
			}
		},
	});
}
