(function (window) {
	var byeSpeaker = {};
	var sayBye = "GoodBye";

	byeSpeaker.say =  function (name) {
		console.log(sayBye + " " + name);
	}

	window.byeSpeaker = byeSpeaker;

})(window);


