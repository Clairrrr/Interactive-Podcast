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
	$("#SigninForm").submit(handleSignup);
}

function handleLogin(e) {
	e.preventDefault();
	$.ajax({
		url: $("#loginForm").attr('action'),
		type: 'get',
		data: $("#loginForm").serialize(),
		success: function (res) {
			window.location.href = `/home/${res}`;
		},
	});
}

function handleSignup(e) {
	e.preventDefault();
	$.ajax({
		url: $("#SigninForm").attr('action'),
		type: 'get',
		data: $("#SigninForm").serialize(),
		success: function (res) {
			window.location.href = `/home/${res[0]}`;
		},
	});
}

function goBack() {
	window.history.back();
}


