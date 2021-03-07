var names = [ "John", "Jack", "Jimmy", "Sarah", "David", "Daniel", "Laura"];
(function (names) {
    for (name in names) {
        var firstLetter = names[name].charAt(0);
        var firstLetterLower = firstLetter.toLowerCase();
        
        if (firstLetterLower == "j") {
            bye.say(names[name]);
        } else {
            hello.say(names[name]);
        }
    }

})(names);