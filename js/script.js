
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
    alert("YOU already entred this number, try again")
  }else{
    alert("REMEMBER THE NUMBER MUST BE FROM 1 TO 100!!")
  }
}
// riporto il messaggo se l'utente ha vinto o ha calpestato la mina
if (isItIn(cpuNumbers, entredNumber)){
  alert("BOOOOOOOMM ahi ahi ahi you got a bomb!!!")
}else{
  alert("FANTASTIC you're the winner")
}
