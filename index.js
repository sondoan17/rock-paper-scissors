var playerPoints = sessionStorage.getItem("playerPoints") || 0;
var botPoints = sessionStorage.getItem("botPoints") || 0;
function gameRPS(playerChoiceValue) {
  var botChoiceValue = Math.floor(Math.random() * 3);
  if (botChoiceValue === 0) {
    botChoice = "👊";
  } else {
    if (botChoiceValue === 1) {
      botChoice = "🤚";
    } else {
      botChoice = "✌️";
    }
  }
  if (playerChoiceValue === 0) {
    playerChoice = "👊";
  } else {
    if (playerChoiceValue === 1) {
      playerChoice = "🤚";
    } else {
      playerChoice = "✌️";
    }
  }
  if (botChoiceValue === playerChoiceValue) {
    document.querySelector(".result").innerHTML =
      "You choose " + playerChoice + ", bot choose " + botChoice + ". Draw!";
  } else {
    if (botChoiceValue > playerChoiceValue) {
      if (playerChoiceValue == 0 && botChoiceValue == 2) {
        document.querySelector(".result").innerHTML =
          "You choose " +
          playerChoice +
          ", bot choose " +
          botChoice +
          " .You Won!";
        playerPoints++;
        document.querySelector(".point").innerHTML =
          "Player: " + playerPoints + " - Bot: " + botPoints;
      } else {
        document.querySelector(".result").innerHTML =
          "You choose " +
          playerChoice +
          ", bot choose " +
          botChoice +
          " .You Lose!";
        botPoints++;
        document.querySelector(".point").innerHTML =
          "Player: " + playerPoints + " - Bot: " + botPoints;
      }
    } else if (botChoiceValue < playerChoiceValue) {
      if (botChoiceValue == 0 && playerChoiceValue == 2) {
        document.querySelector(".result").innerHTML =
          "You choose " +
          playerChoice +
          ", bot choose " +
          botChoice +
          " .You Lose!";
        botPoints++;
        document.querySelector(".point").innerHTML =
          "Player: " + playerPoints + " - Bot: " + botPoints;
      } else {
        document.querySelector(".result").innerHTML =
          "You choose " +
          playerChoice +
          ", bot choose " +
          botChoice +
          " .You Won!";
        playerPoints++;
        document.querySelector(".point").innerHTML =
          "Player: " + playerPoints + " - Bot: " + botPoints;
      }
    }
  }
  sessionStorage.setItem("playerPoints", playerPoints);
  sessionStorage.setItem("botPoints", botPoints);
  if (playerPoints == 10) {
    alert("u wibu tcon teacon");
  }
}
function resetPoints() {
  sessionStorage.removeItem("playerPoints");
  sessionStorage.removeItem("botPoints");
  playerPoints = 0;
  botPoints = 0;
  document.querySelector(".point").innerHTML =
    "Player: " + playerPoints + "- Bot: " + botPoints;
}
function chooseRock() {
  gameRPS(0);
}
function choosePaper() {
  gameRPS(1);
}
function chooseScissors() {
  gameRPS(2);
}
document.querySelector(".rock").addEventListener("click", chooseRock);
document.querySelector(".paper").addEventListener("click", choosePaper);
document.querySelector(".scissors").addEventListener("click", chooseScissors);
document.querySelector(".reset").addEventListener("click", resetPoints);
