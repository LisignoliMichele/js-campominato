
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

// in base alle scelta

if (choice == "easy") {// con difficoltà 0 => tra 1 e 100
  // 1.creo 16 numeri casuali da 1 a 100, se non sono gia presenti gli inserisco in un array
  var cpuNumbers = [];
  while(cpuNumbers.length < 16){
      var casualNumber = randomNumber (1, 100);
      if(isItIn(cpuNumbers, casualNumber) == false){
        cpuNumbers.push(casualNumber);
      }
  }
  // 2. chiedo all’utente (100 - 16) volte di inserire un numero alla volta sempre che il numero non sia già presente nei numeri random del computer
  var userNumbers = [];
  while (userNumbers.length < 64 && isItIn(cpuNumbers, entredNumber) == false){
    var entredNumber = parseInt(prompt("please enter one number from 1 to 100"));
    // il numero dev'essere compreso tra 1 e 100 e dev esser stato inserito una sola volta
    if ((entredNumber > 0 && entredNumber <= 100) && (isItIn(userNumbers, entredNumber) == false) ){
          userNumbers.push(entredNumber);
    }else if (isItIn(userNumbers, entredNumber)) {
      alert("YOU already entred this number, try again");
    }else{
      alert("REMEMBER THE NUMBER MUST BE FROM 1 TO 100!!");
    }
  }
} else if (choice == "medium") {  // con difficoltà 1 => tra 1 e 80
    // 1.creo 16 numeri casuali da 1 a 80, se non sono gia presenti gli inserisco in un array
    var cpuNumbers = [];
    while(cpuNumbers.length < 16){
        var casualNumber = randomNumber (1, 80);
        if(isItIn(cpuNumbers, casualNumber) == false){
          cpuNumbers.push(casualNumber);
        }
    }
    // 2. chiedo all’utente (80 - 16) volte di inserire un numero alla volta sempre che il numero non sia già presente nei numeri random del computer
    var userNumbers = [];
    while (userNumbers.length < 64 && isItIn(cpuNumbers, entredNumber) == false){
      var entredNumber = parseInt(prompt("please enter one number from 1 to 80"));
      // il numero dev'essere compreso tra 1 e 100 e dev esser stato inserito una sola volta
      if ((entredNumber > 0 && entredNumber <= 80) && (isItIn(userNumbers, entredNumber) == false) ){
            userNumbers.push(entredNumber);
      }else if (isItIn(userNumbers, entredNumber)) {
        alert("YOU already entred this number, try again");
      }else{
        alert("REMEMBER THE NUMBER MUST BE FROM 1 TO 80!!");
      }
    }
}else{// con difficoltà 2 => tra 1 e 50
  // 1.creo 16 numeri casuali da 1 a 50, se non sono gia presenti gli inserisco in un array
  var cpuNumbers = [];
  while(cpuNumbers.length < 16){
      var casualNumber = randomNumber (1, 50);
      if(isItIn(cpuNumbers, casualNumber) == false){
        cpuNumbers.push(casualNumber);
      }
  }
  // 2. chiedo all’utente (50 - 16) volte di inserire un numero alla volta sempre che il numero non sia già presente nei numeri random del computer
  var userNumbers = [];
  while (userNumbers.length < 34 && isItIn(cpuNumbers, entredNumber) == false){
    var entredNumber = parseInt(prompt("please enter one number from 1 to 50"));
    // il numero dev'essere compreso tra 1 e 100 e dev esser stato inserito una sola volta
    if ((entredNumber > 0 && entredNumber <= 50) && (isItIn(userNumbers, entredNumber) == false) ){
          userNumbers.push(entredNumber);
    }else if (isItIn(userNumbers, entredNumber)) {
      alert("YOU already entred this number, try again");
    }else{
      alert("REMEMBER THE NUMBER MUST BE FROM 1 TO 50!!");
    }
  }
}


// riporto il messaggo se l'utente ha vinto o ha calpestato la mina
if (isItIn(cpuNumbers, entredNumber)){
  alert("BOOOOOOOMM ahi ahi ahi you got a bomb!!! THE RESULT OF THE GAME IS: " + userNumbers.length + "POINTS")
}else{
  alert("FANTASTIC you're the winner")
}
