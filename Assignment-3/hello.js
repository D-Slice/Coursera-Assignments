(function (window) {
	var hello = {};
	var sayHello = "Hello";

	hello.say = function (name) {
		console.log(sayHello + " " + name);
	}

	window.hello = hello;

})(window);