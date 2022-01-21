class GameSpaceships {
  constructor(hull, firepower, accuracy) {
    (this.hull = hull),
      (this.firepower = firepower),
      (this.accuracy = accuracy);
  }
  attack() {
    return Math.random();
  }
}
//create a player from class
let player = new GameSpaceships(20, 5, 0.7);

//getting Dom elements
let playerHullDom = document.getElementById("mainHull");
let playerFirePowerDom = document.getElementById("mainFirepower");
let playerAccuracyDom = document.getElementById("mainAccuracy");

//set starting score
let playerHullScore = player.hull;
let playerFirepowerScore = player.firepower;
let playerAccuracyScore = player.accuracy;

//putting player score in dom
playerHullDom.innerHTML = playerHullScore;
playerFirePowerDom.innerHTML = playerFirepowerScore;
playerAccuracyDom.innerHTML = playerAccuracyScore;

//create an enemy spaceship
//let enemy = new GameSpaceships(genrateRandomNumber(3,6), genrateRandomNumber(2,4), genrateRandomNumber(0.6,0.8))

//getting Dom elements
let enemyHullDom = document.getElementById("enemyHull");
let enemyFirePowerDom = document.getElementById("enemyFirepower");
let enemyAccuracyDom = document.getElementById("enemyAccuracy");

let enemyArray = [];
function createEnemyShips() {
  for (let i = 0; i < 6; i++) {
    let enemy = new GameSpaceships(
      genrateRandomNumber(3, 6),
      genrateRandomNumber(2, 4),
      genrateRandomNumber(0.6, 0.8)
    );
    enemyArray.push(
      new GameSpaceships(
        genrateRandomNumber(3, 6),
        genrateRandomNumber(2, 4),
        genrateRandomNumber(0.6, 0.8)
      )
    );
  }
}
console.log(enemyArray);

createEnemyShips();

function startGame() {
  let playerChoice = prompt(`Choose`, `attack/retreat`);
  let enemiesRemaining = 6;
  if (playerChoice && playerChoice.toLocaleLowerCase() == "attack") {
    for (let i = 0; i < 1; i++) {
      let enemyHullScore = enemyArray[enemiesRemaining - 1].hull;
      let enemyFirepowerScore = enemyArray[enemiesRemaining - 1].firepower;
      let enemyAccuracyScore = enemyArray[enemiesRemaining - 1].accuracy;
      //putting player score in dom
      enemyHullDom.innerHTML = enemyHullScore;
      enemyFirePowerDom.innerHTML = enemyFirepowerScore;
      enemyAccuracyDom.innerHTML = enemyAccuracyScore;

      do {
        player.attack();
        if (player.attack() < player.accuracy) {
          enemyArray[enemiesRemaining - 1].hull =
            enemyArray[enemiesRemaining - 1].hull - player.hull;

          if (enemyArray[enemiesRemaining - 1].hull < 0) {
            enemiesRemaining--;
            playerChoice = prompt(
              `[Current Health:${player.hull} Target's Health: ${
                enemyArray[enemiesRemaining - 1].hull
              } Enemies Remaimaining: ${enemiesRemaining}]
    Do you Want to Attack the next Alien Ship`,
              `attack/retreat`
            );
            
            if (enemiesRemaining == 1) {
              alert("You Won");
            }
          }
        } else if (player.attack() > player.accuracy) {
          alert(
            ` The enemy will attack now. [Current Health:${
              player.hull
            } Target's Health: ${
              enemyArray[enemiesRemaining - 1].hull
            } Enemies Remaimaining: ${enemiesRemaining}]`
          );
          enemyArray[enemiesRemaining - 1].attack();
          if (
            enemyArray[enemiesRemaining - 1].attack() < enemyArray[i].accuracy
          ) {
            player.hull = player.hull - enemyArray[enemiesRemaining - 1].hull;
            if (player.hull <= 0) {
              alert("The Computer Won. Game Over");
              break;
            }
          }
        }
      } while (enemiesRemaining > 0);
    }
  } else {
    alert("BYE BYE");
  }
}

startGame();

//functions

function genrateRandomNumber(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}
