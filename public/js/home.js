'use strict';
//this is for google analytics YZ Feb 26
function initializePage() {
	// your code here
	$('a').click(function(){
		ga("send", "event", "class", "click");
	});
}