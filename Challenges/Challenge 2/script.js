// Collecting Data / Vars

var input = document.getElementById("textarea"),
    buttons = document.getElementById("buttons"),
    one = document.getElementById("one"),
    two = document.getElementById("two"),
    three = document.getElementById("three"),
    four = document.getElementById("four"),
    five = document.getElementById("five"),
    six = document.getElementById("six"),
    seven = document.getElementById("seven"),
    eight = document.getElementById("eight"),
    nine = document.getElementById("nine"),
    zero = document.getElementById("zero"),
    subs = document.getElementById("sub"),
    add = document.getElementById("add"),
    divide = document.getElementById("divide"),
    multi = document.getElementById("multi"),
    reset = document.getElementById("reset"),
    equal = document.getElementById("equal"),
    dot = document.getElementById("dot"),
    del = document.getElementById("del"),
    test = document.getElementById("test"),
    circleDiv = document.getElementById("circleDiv"),
    circle = document.getElementById("circle"),
    body = document.getElementById("body"),
    buttonsContainer = document.getElementById("buttons-container"),
    textAr = document.getElementById("textarea"),
    cal = document.getElementById("calc"),
    theme = document.getElementById("theme"),
    liOne = document.getElementById("li-one"),
    liTwo = document.getElementById("li-two"),
    liThree = document.getElementById("li-three");

// Functions for numbers..etc

one.onclick = function(){
    if(isNaN(input.value)){
        input.value = 1
    }else{
        input.value += 1
    }
    
}
two.onclick = function(){
    if(isNaN(input.value)){
        input.value = 2
    }else{
        input.value += 2
    }
    
}
three.onclick = function(){
    if(isNaN(input.value)){
        input.value = 3
    }else{
        input.value += 3
    }
}
four.onclick = function(){
    if(isNaN(input.value)){
        input.value = 4
    }else{
        input.value += 4
    }
}
five.onclick = function(){
    if(isNaN(input.value)){
        input.value = 5
    }else{
        input.value += 5
    }
}
six.onclick = function(){
    if(isNaN(input.value)){
        input.value = 6
    }else{
        input.value += 6
    }
}
seven.onclick = function(){
    if(isNaN(input.value)){
        input.value += 7
    }else{
        input.value += 7
    }
}
eight.onclick = function(){
    if(isNaN(input.value)){
        input.value = 8
    }else{
        input.value +=8
    }

}
nine.onclick = function(){
    if(isNaN(input.value)){
        input.value = 9
    }else{
        input.value += 9
    }
}
zero.onclick = function(){
    if(isNaN(input.value)){
        input.value = 0
    }else{
        input.value += 0
    }
}
dot.onclick = function(){
    input.value += "."
}
reset.onclick = function(){
    input.value = ""
    test.setAttribute("data-type", "")
}
del.onclick = function(){
    input.value = input.value.substring(0, input.value.length - 1)
}
add.onclick = function(){
    test.setAttribute("data-type", input.value)
    input.value = "+"
    equal.onclick = function(){
        input.value = parseFloat(test.getAttribute("data-type")) + parseFloat(input.value)
    }
}
multi.onclick = function(){
    test.setAttribute("data-type", input.value)
    input.value = "x"
    equal.onclick = function(){
        input.value = test.getAttribute("data-type") * input.value
    }
}

sub.onclick = function(){
    test.setAttribute("data-type", input.value)
    input.value = "-"
    equal.onclick = function(){
        input.value = test.getAttribute("data-type") -input.value
    }
}
divide.onclick = function(){
    test.setAttribute("data-type", input.value)
    input.value = "/"
    equal.onclick = function(){
        input.value = test.getAttribute("data-type") / input.value
    }
}
equal.onclick = function(){
    input.style.fontSize = "15";
    if(input.value == ""){
        input.value = "!Enter two numbers";
    }
}
circleDiv.onclick = function(){
    if(circle.style.left == "4"){
        circle.style.left = "4px"
        body.style.backgroundColor = ""
    }else if(circle.style.left == "19px"){
        circle.style.left = "35px"
        body.style.backgroundColor = "hsl(268, 75%, 9%)"
        textAr.setAttribute("class", "textAr3")
        textAr.setAttribute("style", "color: hsl(52, 100%, 62%) !important")
        textAr.setAttribute("id", "none")
        buttonsContainer.setAttribute("class", "buttonsContainer3")
        buttonsContainer.setAttribute("id", "none")
        theme.setAttribute("id", "none")
        theme.setAttribute("class", "theme3")
        liOne.setAttribute("id", "nine")
        liOne.setAttribute("class", "liOne3")
        liTwo.setAttribute("id", "nine")
        liTwo.setAttribute("class", "liOne3")
        liThree.setAttribute("id", "nine")
        liThree.setAttribute("class", "liOne3")
        cal.setAttribute("id", "none")
        cal.setAttribute("class", "cal3")
        circleDiv.setAttribute("id", "none")
        circleDiv.setAttribute("class", "circleDiv3")
        one.setAttribute("id", "none")
        one.setAttribute("class", "one3")
        two.setAttribute("id", "none")
        two.setAttribute("class", "one3")
        three.setAttribute("id", "none")
        three.setAttribute("class", "one3")
        four.setAttribute("id", "none")
        four.setAttribute("class", "one3")
        five.setAttribute("id", "none")
        five.setAttribute("class", "one3")
        six.setAttribute("id", "none")
        six.setAttribute("class", "one3")
        seven.setAttribute("id", "none")
        seven.setAttribute("class", "one3")
        eight.setAttribute("id", "none")
        eight.setAttribute("class", "one3")
        nine.setAttribute("id", "none")
        nine.setAttribute("class", "one3")
        zero.setAttribute("id", "none")
        zero.setAttribute("class", "one3")
        add.setAttribute("id", "none")
        add.setAttribute("class", "one3")
        divide.setAttribute("id", "none")
        divide.setAttribute("class", "one3")
        subs.setAttribute("id", "none")
        subs.setAttribute("class", "one3")
        multi.setAttribute("id", "none")
        multi.setAttribute("class", "one3")
        dot.setAttribute("id", "none")
        dot.setAttribute("class", "one3")
        del.setAttribute("style", "background-color: none !important")
        del.setAttribute("id", "none")
        del.setAttribute("class", "del3")
        reset.setAttribute("style", "background-color: none !important")
        reset.setAttribute("id", "none")
        reset.setAttribute("class", "reset3")
        equal.setAttribute("id", "none")
        equal.setAttribute("class", "equal3")
        circle.setAttribute("id", "none")
        circle.setAttribute("class", "circle3")

        
    }else if(circle.style.left == "35px"){
        circle.style.left = "4px";
        body.style.backgroundColor = "hsl(222, 26%, 31%)"
        buttonsContainer.style.backgroundColor = "hsl(223, 31%, 20%)"
        buttonsContainer.style.transition = "all 2s"
        textAr.style.backgroundColor = "hsl(224, 36%, 15%)"
        textAr.style.color = "white"
        textAr.style.transition = "all 2s"
        reset.setAttribute("style", "background-color: hsl(225, 21%, 49%)  !important")
        reset.style.transition = "all 2s"
        del.setAttribute("style", "background-color: hsl(225, 21%, 49%) !important")
        del.style.transition = "all 2s"
        cal.style.color = "white"
        cal.style.transition = "all 2s"
        circleDiv.style.backgroundColor = "hsl(268, 71%, 12%)"
        circle.style.transition = "all 2s"
        body.style.backgroundColor = "hsl(222, 26%, 31%)"
        theme.style.color = "white"
        theme.style.transition = "all 2s"
        liOne.style.color = "white"
        liOne.style.transition = "all 2s"
        liTwo.style.color = "white"
        liTwo.style.transition = "all 2s"
        liThree.style.color = "white"
        liThree.style.transition = "all 2s"
        body.style.transition = "all 2s"
        textAr.setAttribute("class", "none")
        textAr.setAttribute("id", "textarea")
        buttonsContainer.setAttribute("class", "none")
        buttonsContainer.setAttribute("id", "buttons-container")
        theme.setAttribute("id", "theme")
        theme.setAttribute("class", "none")
        liOne.setAttribute("id", "li-one")
        liOne.setAttribute("class", "none")
        liTwo.setAttribute("id", "li-two")
        liTwo.setAttribute("class", "none")
        liThree.setAttribute("id", "li-three")
        liThree.setAttribute("class", "none")
        cal.setAttribute("id", "calc")
        cal.setAttribute("class", "none")
        circleDiv.setAttribute("id", "circleDiv")
        circleDiv.setAttribute("class", "none")
        one.setAttribute("id", "one")
        one.setAttribute("class", "none")
        one.setAttribute("style", "transition: all 2s")
        two.setAttribute("id", "two")
        two.setAttribute("class", "none")
        two.setAttribute("style", "transition: all 2s")
        three.setAttribute("id", "three")
        three.setAttribute("class", "none")
        three.setAttribute("style", "transition: all 2s")
        four.setAttribute("id", "four")
        four.setAttribute("class", "none")
        four.setAttribute("style", "transition: all 2s")
        five.setAttribute("id", "five")
        five.setAttribute("class", "none")
        five.setAttribute("style", "transition: all 2s")
        six.setAttribute("id", "six")
        six.setAttribute("class", "none")
        six.setAttribute("style", "transition: all 2s")
        seven.setAttribute("id", "seven")
        seven.setAttribute("class", "none")
        seven.setAttribute("style", "transition: all 2s")
        eight.setAttribute("id", "eight")
        eight.setAttribute("class", "none")
        eight.setAttribute("style", "transition: all 2s")
        nine.setAttribute("id", "nine")
        nine.setAttribute("class", "none")
        nine.setAttribute("style", "transition: all 2s")
        zero.setAttribute("id", "zero")
        zero.setAttribute("class", "none")
        zero.setAttribute("style", "transition: all 2s")
        add.setAttribute("id", "add")
        add.setAttribute("class", "none")
        add.setAttribute("style", "transition: all 2s")
        divide.setAttribute("id", "divide")
        divide.setAttribute("class", "none")
        divide.setAttribute("style", "transition: all 2s")
        subs.setAttribute("id", "subs")
        subs.setAttribute("class", "none")
        subs.setAttribute("style", "transition: all 2s")
        multi.setAttribute("id", "multi")
        multi.setAttribute("class", "none")
        multi.setAttribute("style", "transition: all 2s")
        dot.setAttribute("id", "dot")
        dot.setAttribute("class", "none")
        dot.setAttribute("style", "transition: all 2s")
        del.setAttribute("id", "del")
        del.setAttribute("class", "none")
        del.setAttribute("style", "transition: all 2s")
        reset.setAttribute("id", "reset")
        reset.setAttribute("class", "none")
        reset.setAttribute("style", "transition: all 2s")
        equal.setAttribute("id", "equal")
        equal.setAttribute("class", "none")
        equal.setAttribute("style", "transition: all 2s")
        circle.setAttribute("id", "circle")
        circle.setAttribute("class", "none")
    }else{
        circle.style.left = "19px"
        buttonsContainer.style.backgroundColor = "hsl(0, 5%, 81%)"
        textAr.style.backgroundColor = "hsl(0, 0%, 93%)"
        textAr.style.color = "black"
        reset.setAttribute("style", "background-color: hsl(185, 42%, 37%) !important")
        del.setAttribute("style", "background-color: hsl(185, 42%, 37%) !important")
        cal.style.color = "black"
        circleDiv.style.backgroundColor = "hsl(0, 5%, 81%)"
        circle.style.transition = "all 2s"
        body.style.backgroundColor = "hsl(0, 0%, 90%)"
        theme.style.color = "black"
        liOne.style.color = "black"
        liTwo.style.color = "black"
        liThree.style.color = "black"
        body.style.transition = "all 2s"
        buttonsContainer.style.transition = "all 2s"
        textAr.style.transition = "all 2s"
        reset.style.transition = "all 2s"
        del.style.transition = "all 2s"
        cal.style.transition = "all 2s"
        circleDiv.style.transition = "all 2s"
        theme.style.transition = "all 2s"
        liOne.style.transition = "all 2s"
        liTwo.style.transition = "all 2s"
        liThree.style.transition = "all 2s"
        body.style.transition = "all 2s"
    }
}
