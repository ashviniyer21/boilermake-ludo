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

let gameId = "";

name.style.display = "None";
nameLabel.style.display = "None";
submitButton.style.display = "None";
id.style.display = "None";
idLabel.style.display = "None";
startButton.style.display = "None";

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