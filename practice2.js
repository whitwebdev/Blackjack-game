let player1Time = 102;
let player2Time = 107;

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

let fastestRace = getFastestRaceTime();
console.log(fastestRace);

function totalRaceTime() {
    return player1Time + player2Time
}

let time = totalRaceTime();
console.log(time);

let randomNumber = Math.random() // random number between 0 - 1
console.log(randomNumber)

let anotherRandomNumber = Math.random() * 6 // random number between 0 - 6
console.log(anotherRandomNumber)

let flooredNumber = Math.floor(3.45632) // removes decimals
console.log(flooredNumber)

let yetAnotherRandomNumber = Math.floor(Math.random() * 6) // numbers 0 - 5
console.log(yetAnotherRandomNumber)

let diceRoll = Math.floor(Math.random() * 6) + 1
console.log(diceRoll);

function rollDice() {
    diceResult = Math.floor(Math.random() * 6) + 1;
    return diceResult
}

console.log(rollDice())


