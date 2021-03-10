
// FUNZIONI
// function crea numeri random
function randomNumber ( min, max ){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//function trova se é presente un elemento in un array
function isItIn(array, element){
  var i = 0;

  while ( i < array.length ){
    if ( array[i] == element ){
      return true
    }
    i ++
  }
  return false;
}

// BONUS:
do{
  var choice = prompt("select the difficulty: easy, medium of hard").toLowerCase();
}while(choice != "easy" && choice != "medium" && choice != "hard");

var maxBombs;
switch (choice) {
  case "easy":
    maxBombs = 100;
    break;
  case "medium":
    maxBombs = 70;
    break;
  case "hard":
    maxBombs = 50;
}

// 1.creo 16 numeri casuali in base alla difficolta del livello, se i numeri non sono gia presenti gli inserisco in un array
var cpuNumbers = [];
while(cpuNumbers.length < 16){
  var casualNumber = randomNumber (1, maxBombs);
  if(isItIn(cpuNumbers, casualNumber) == false){
    cpuNumbers.push(casualNumber);
  }
}

// 2. chiedo all’utente di inserire un numero alla volta sempre che il numero non sia già presente nei numeri random del computer
var userNumbers = [];
var toTheWin = maxBombs - 16;
var explosed = false;
while (userNumbers.length < toTheWin && explosed == false){
  var entredNumber = parseInt(prompt("please enter one number from 1 to 100"));
  // il numero dev'essere compreso tra 1 e 100 e dev esser stato inserito una sola volta
  if (isNaN(entredNumber) || entredNumber < 1 || entredNumber > 100){
    alert("REMEMBER THE NUMBER MUST BE FROM 1 TO 100!!");
  } else if (isItIn(userNumbers, entredNumber)) {
    alert("YOU already entred this number, try again");
  } else if (isItIn(cpuNumbers, entredNumber)){
    explosed = true;
  } else {
    userNumbers.push(entredNumber);
  }
}

// 3. riporto il messaggo se l'utente ha vinto o ha calpestato la mina
if (isItIn(cpuNumbers, entredNumber)){
  alert("BOOOOOOOMM ahi ahi ahi you got a bomb!!! THE RESULT OF THE GAME IS: " + userNumbers.length + " POINTS")
} else {
  alert("FANTASTIC you're the winner")
}
