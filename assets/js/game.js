$( document ).ready()(function getRandomValue() {
return Math.floor((Math.random() * 120) + 19);
var yourScore = document.getElementById('yourScore');
yourScore.innerHTML = 0; 

var magicNumber = document.getElementById('magicNumber');
magicNumber.innerHTML = getRandomValue(120, 19);

document.getElementById("magicNumber").innerHTML =
Math.floor(Math.random() * 120) + 19;
});

$("#crystals").on("click", function() {
    alert("I've been clicked!");
  });

for (var i = 0; i < numberOptions.length; i++) {
  }
function addToScore(val) {
  var numberToAdd = parseInt(val);
  var currentScore = parseInt(yourScore.innerHTML);
  yourScore.innerHTML = numberToAdd + currentScore;
}

var magicNumber = $("#number-to-guess").magicNumber;
var counter = 0;

var orangeRed = document.getElementById("orangeRed");
console.log(orangeRed.value);

var black = document.getElementById("black");
console.log(black.value);

var pink = document.getElementById("pink");
console.log(pink.value);

var green = document.getElementById("green");
console.log(green.value);

orangeRed.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});

black.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});

pink.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});

green.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});

function checkPlayerScore() {
  var playerInt = parseInt(yourScore.innerHTML);
  var targetInt = parseInt(magicNumber.innerHTML);
}

  $("#crystals").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
  });

