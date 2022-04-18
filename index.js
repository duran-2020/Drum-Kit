//Create a for loop that allows all buttons to be used by event listener

//initialize loop to start at 0
//select all buttons with document.querySelectorAll targeting all of the elements
//that contain the class ".drum" and /length to see how many elements have
//the class of drum. the length number tells helps us determine when we should
//stop looping.

//Long version: for (var i = 0; i < document.querySelectorAll(".drum").length)

//easier to comprehend version start by first devlaring numOfDrumButtons:
var numOfDrumButtons = document.querySelectorAll(".drum").length;


//-Begin For Loop
for (var i = 0; i < numOfDrumButtons; i++) {


  //Detecting Button Press


  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });


  //Detecting Keyboard Press


  document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
  });
}
//-End For Loop


function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default: console.log(buttonInnerHTML);
        break;
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
