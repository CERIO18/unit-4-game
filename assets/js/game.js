$(document).ready(function () {
  var Random = Math.floor(Math.random() * 101) + 19;
  $('#magicNumber').text(Random);

  var orangeRed = Math.floor(Math.random() * 11 + 1);
  var black = Math.floor(Math.random() * 11 + 1);
  var pink = Math.floor(Math.random() * 11 + 1);
  var green = Math.floor(Math.random() * 11 + 1);
  var userTotal = 0;
  var wins = 0;
  var losses = 0;

  $('#wins').text(wins);
  $('#losses').text(losses);
  $('#userTotal').text(userTotal);

  function reset() {
    Random = Math.floor(Math.random() * 101 + 19);
    $('#magicNumber').text(Random);
    orangeRed = Math.floor(Math.random() * 11 + 1);
    black = Math.floor(Math.random() * 11 + 1);
    pink = Math.floor(Math.random() * 11 + 1);
    green = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    console.log(userTotal);
  }

  function winner() {
    alert("YOU WON!");
    console.log('wins: ', wins);
    wins++;
    console.log('wins: ', wins);
    $('#wins').text(wins);
    reset();
  }

  function loser() {
    alert("Not this time, try again!");
    losses++;
    $('#losses').text(losses);
    reset();
  }

  $('#orangeRed').on('click', function () {
    userTotal = userTotal + orangeRed;
    console.log("New userTotal= " + orangeRed);
    $('#userTotal').text(userTotal);
    if (userTotal == Random) {
      winner();
    } else if (userTotal > Random) {
      loser();
    }
  })
  $('#black').on('click', function () {
    userTotal = userTotal + black;
    console.log("New userTotal= " + black);
    $('#userTotal').text(userTotal);
    if (userTotal == Random) {
      winner();
    } else if (userTotal > Random) {
      loser();
    }
  })
  $('#pink').on('click', function () {
    userTotal = userTotal + pink;
    console.log("New userTotal= " + userTotal);
    $('#userTotal').text(userTotal);
    if (userTotal == Random) {
      winner();
    } else if (userTotal > Random) {
      loser();
    }
  })
  $('#green').on('click', function () {
    userTotal = userTotal + green;
    console.log("New userTotal= " + userTotal);
    $('#userTotal').text(userTotal);

    if (userTotal == Random) {
      winner();
    } else if (userTotal > Random) {
      loser();
    }
  })
});