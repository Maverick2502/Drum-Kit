var numberOfDrums = document.querySelectorAll(".drum");

for (let i = 0; i < numberOfDrums.length; i++) {
    numberOfDrums[i].addEventListener('click', function() {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonAnimation);
        activeButton(buttonAnimation); 
    })
}

document.addEventListener('keydown', function(event) {

    makeSound(event.key);
    buttonAnimation(event.key);
})


function makeSound(key) {

    switch (key) {
        case "w":
            var tomb1 = new Audio("sounds/tom-1.mp3");
            tomb1.play();
            break;
        case "a":
            var tomb2 = new Audio("sounds/tom-2.mp3");
            tomb2.play();
            break;
        case "s":
            var tomb3 = new Audio("sounds/tom-3.mp3");
            tomb3.play();
            break;
        case "d":
            var tomb4 = new Audio("sounds/tom-4.mp3");
            tomb44.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        
         default: console.log(key);
    }
}


function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100)
}



let set = document.querySelector(".set");

console.log(set);