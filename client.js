let socket = io();

let createButton = document.getElementById("create");
let joinButton = document.getElementById("join");

let submitButton = document.getElementById("submit");
let startButton = document.getElementById("start");

let name = document.getElementById("name");
let nameLabel = document.getElementById("nameLabel");

let id = document.getElementById("id");
let idLabel = document.getElementById("idLabel");

let text = document.getElementById("message");

let board = document.getElementById("board");

let pieces = document.getElementsByClassName("piece");

let turn = document.getElementById("turn");

for(let i = 0; i < pieces.length; i++) {
    pieces[i].style.display = "none";
}

let gameId = "";

let nameString = "";

name.style.display = "None";
nameLabel.style.display = "None";
submitButton.style.display = "None";
id.style.display = "None";
idLabel.style.display = "None";
startButton.style.display = "None";
board.style.display = "None";

createButton.onclick = function () {
    name.style.display = "Block";
    nameLabel.style.display = "Block";
    submitButton.style.display = "Block";
    startButton.style.display = "Block";
}

joinButton.onclick = function () {
    name.style.display = "Block";
    nameLabel.style.display = "Block";
    submitButton.style.display = "Block";
    id.style.display = "Block";
    idLabel.style.display = "Block";
}

submitButton.onclick = function () {
    if(id.style.display === "none") {
        socket.emit('create', name.value);
    } else {
        gameId = id.value;
        socket.emit('join', name.value, id.value);
    }
    nameString = name.value;
}

startButton.onclick = function () {
    socket.emit('start', gameId);
}

socket.on('create-success', function (id) {
    gameId = id;
    text.innerHTML = "Game ID: " + gameId;
});

socket.on('player-join', function (players) {
    text.innerHTML = "Game ID: " + gameId;
    let list = players.toString().split(",");
    for(let i = 0; i < list.length; i++) {
        console.log(list[i]);
        text.innerHTML += "<br>" + list[i];
    }
});

socket.on('start-game', function () {
   board.style.display = "block";
    for(let i = 0; i < pieces.length; i++) {
        pieces[i].style.display = "block";
        pieces[i].addEventListener("click", ()=> {
           socket.emit('move', gameId, pieces[i].id);
        });
    }
});

socket.on('board-change', function (game) {
    turn.innerHTML = game.turn + "'s Turn. (" + game.color + ")";
    if(game.turn === nameString) {
        die1.style.display = "block";
        die2.style.display = "block";
        die3.style.display = "block";
        string1.style.display = "block";
        string2.style.display = "block";
        string3.style.display = "block";
        rollString.style.display = "block";
    } else {
        die1.style.display = "none";
        die2.style.display = "none";
        die3.style.display = "none";
        string1.style.display = "none";
        string2.style.display = "none";
        string3.style.display = "none";
        rollString.style.display = "none";
    }
    for(let i = 0; i < pieces.length; i++) {
        let newPieces = game.pieces;
        let x = newPieces[pieces[i].id].coords[0] * 100.0/3;
        let y = newPieces[pieces[i].id].coords[1] * 100.0/3 - 30 * i;
        pieces[i].style.top = (y).toString() + "px";
        pieces[i].style.left = (x).toString() + "px";
    }
    r1 = roll(normalDie);
    rDie1 = randomizeDice();
    string2.innerHTML = rDie1[0].toString() + ", " + rDie1[1].toString() + ", " + rDie1[2].toString() + ", " + rDie1[3].toString() + ", " + rDie1[4].toString() + ", " + rDie1[5].toString();
    rDie2 = randomizeDice();
    string3.innerHTML = rDie2[0].toString() + ", " + rDie2[1].toString() + ", " + rDie2[2].toString() + ", " + rDie2[3].toString() + ", " + rDie2[4].toString() + ", " + rDie2[5].toString();
    r2 = roll(rDie1);
    r3 = roll(rDie2);
});

let rDie1 = randomizeDice();
let rDie2 = randomizeDice();

let die1 = document.getElementById("normalDie");
let die2 = document.getElementById("randomOne");
let die3 = document.getElementById("randomTwo");

const normalDie = [1, 2, 3, 4, 5, 6];

function randomizeDice() {
    let x = [];
    let numsUsed = {};

    for (let i = 1; i < 7; i++) {
        numsUsed[i] = 0;
    }

    for (let i = 0; i < 6; i++) {
        let temp = (Math.random() * 6 + 1) | 0;

        if (numsUsed[temp] > 2) {
            i--;
        } else {
            x.push(temp);
            numsUsed[temp]++;
        }
    }

    return x;
}

function roll(dice) {
    return dice[(Math.random() * 6) | 0];
}

let string1 = document.getElementById("Die1Contents");
string1.innerHTML = normalDie[0].toString() + ", " + normalDie[1].toString() + ", " + normalDie[2].toString() + ", " + normalDie[3].toString() + ", " + normalDie[4].toString() + ", " + normalDie[5].toString();

let string2 = document.getElementById("Die2Contents");
string2.innerHTML = rDie1[0].toString() + ", " + rDie1[1].toString() + ", " + rDie1[2].toString() + ", " + rDie1[3].toString() + ", " + rDie1[4].toString() + ", " + rDie1[5].toString();

let string3 = document.getElementById("Die3Contents");
string3.innerHTML = rDie2[0].toString() + ", " + rDie2[1].toString() + ", " + rDie2[2].toString() + ", " + rDie2[3].toString() + ", " + rDie2[4].toString() + ", " + rDie2[5].toString();

let rollString = document.getElementById("RollOutput");

let r1 = roll(normalDie);
let r2 = roll(rDie1);
let r3 = roll(rDie2);

die1.addEventListener("click", function () {
    let roll = r1;
    rollString.innerHTML = "You rolled a " + roll.toString();
    socket.emit('roll', gameId, roll);
});

die2.addEventListener("click", function () {
    let roll = r2;
    rollString.innerHTML = "You rolled a " + roll.toString();
    socket.emit('roll', gameId, roll);
});

die3.addEventListener("click", function () {
    let roll = r3;
    rollString.innerHTML = "You rolled a " + roll.toString();
    socket.emit('roll', gameId, roll);
});