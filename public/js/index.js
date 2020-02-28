'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	var link = document.getElementById('courseB');
	link.focus();
	// $("#search").submit(handleSearch);
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
			window.location.href = `/home/${res.name}`;
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

function openTab(e, b) {
	var i, tabcontent, tablinks, target;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	if(b) target = "coursesTab";
	else target = "recentlyTab";
	document.getElementById(target).style.display = "block";
	// evt.currentTarget.className += " active";
}

function dropdown(id) {
	document.getElementById(id).classList.toggle("show");
}

function handleSearch() {
	var cont = document.getElementById("searchBar").value;
	window.location.href = `/search/${cont}`;

}



