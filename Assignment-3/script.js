var names = ["Yakoov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
(function (names) {
    for (name in names) {
        var firstLetter = names[name].charAt(0);
        var firstLetterLower = firstLetter.toLowerCase();
        
        if (firstLetterLower == "j") {
            byeSpeaker.say(names[name]);
        } else {
            helloSpeaker.say(names[name]);
        }
    }

})(names);