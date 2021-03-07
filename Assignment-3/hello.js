(function (window) {
	var helloSpeaker = {};
	var sayHello = "Hello";

	helloSpeaker.say = function (name) {
		console.log(sayHello + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);