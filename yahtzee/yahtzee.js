let p1Scores =[];//sla hierin de gebruikte nummers op, dit zijn de nummers die beige gekleurd zijn
let p2Scores =[];
let rollsLeft = document.querySelector("#rolls") // het aantal rollen die in de header moeten staan
let p1Turn=true;//true voor player 1, false voor player 2
let dice=[];//sla hierin de dobbesteen html elementen op, zodat je deze kan aanpassen via js
const diceNumber= [1,2,3,4,5,6];
const chosen = [false, false, false, false, false];

function rollDie(dice) {
  if(chosen[dice-1]){
    return;}
  let diceThrow = Math.floor(Math.random() * 6) + 1;
  document.getElementById('die' + dice).src = 'Images/Dice-' + diceThrow + '.jpeg';
}

function rollDice() {
  if(rollsLeft.innerHTML <= 0){
    alert("je hebt geen rolls meer");
    swapTurn();
    return;
  }
  for(let i = 1; i < 6; i++) {
    rollDie(i);
  }

  rollsLeft.innerHTML--;
}

// Koppel de rollDice-functie aan de "ROLL!" knop door de rollDice-functie aan te roepen wanneer er op de knop wordt geklikt
document.querySelector('.rollButton').addEventListener('click', rollDice);


const diceElem = document.querySelectorAll('.dice');

diceElem.forEach(function(elem){
  elem.addEventListener('click', lockDie);
});


function lockDie(dice){
  
  const dieElement = document.getElementById('die' + dice);

  dieElement.style.border = '2px solid red';

  if(chosen[dice - 1] == false){
    chosen[dice-1] = true;
    dieElement.style.border = '2px solid red';
  } else {
    chosen[dice-1] = false;
    dieElement.style.border = '2px solid black';
  }
  console.log(dieElement);
  console.log(dice);
  console.log(chosen[dice-1]);

}
//voorbeeld code hoe je een button interactable kan maken, zodat je deze op hold kan zetten

function nOfAKind(num,dice){
  let points;
  return points;
}

function fullHouse(dice){

}

function single(num,dice) {

}

function calculatePoints(dice) {

}

function swapTurn(){

}

