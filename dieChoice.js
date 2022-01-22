let rDie1 = randomizeDice();
let rDie2 = randomizeDice();

let die1 = document.getElementById("normalDie");
let die2 = document.getElementById("randomOne");
let die3 = document.getElementById("randomTwo");

let string1 = document.getElementById("Die1Contents");
string1.innerHTML = normalDie[0].toString() + ", " + normalDie[1].toString() + ", " + normalDie[2].toString() + ", " + normalDie[3].toString() + ", " + normalDie[4].toString() + ", " + normalDie[5].toString();

let string2 = document.getElementById("Die2Contents");
string2.innerHTML = rDie1[0].toString() + ", " + rDie1[1].toString() + ", " + rDie1[2].toString() + ", " + rDie1[3].toString() + ", " + rDie1[4].toString() + ", " + rDie1[5].toString();

let string3 = document.getElementById("Die3Contents");
string3.innerHTML = rDie2[0].toString() + ", " + rDie2[1].toString() + ", " + rDie2[2].toString() + ", " + rDie2[3].toString() + ", " + rDie2[4].toString() + ", " + rDie2[5].toString();

let rollString = document.getElementById("RollOutput");

die1.addEventListener("click", function () {
    let roll = roll(normalDie);
    rollString = "You rolled a " + roll.toString();
});

die2.addEventListener("click", function () {
    let roll = roll(rDie1);
    rollString = "You rolled a " + roll.toString();
});

die3.addEventListener("click", function () {
    let roll = roll(rDie2);
    rollString = "You rolled a " + roll.toString();
});