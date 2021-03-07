(function (window) {
	var bye = {};
	var sayBye = "GoodBye";

	bye.say =  function (name) {
		console.log(sayBye + " " + name);
	}

	window.bye = bye;

})(window);


