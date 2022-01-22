function kill(pieces, piece) {
    let colorAbrInd = ["r", "b", "y", "g"];
    let colorFullInd = ["red", "blue", "yellow", "green"];

    let killed = false;

    let safeSpaceX = [[0, 4], [4, 0], [10, 0], [0, 10], [14, 4], [4, 14], [14, 10], [10, 14]];

    for (let x = 0; x < safeSpaceX.length; x++) {
        if (compareArrs(piece.coords, safeSpaceX[x])) {
            return false;
        }
    }

    for (let x = 0; x < 4; x++) {
        if (piece.color !== colorFullInd[x]) {
            for (let i = 0; i < 4; i++) {
                if (compareArrs(pieces[colorAbrInd[x] + i].coords, piece.coords)) {
                    pieces[colorAbrInd[x] + i].location = -1;
                    pieces[colorAbrInd[x] + i].coords = pieces[colorAbrInd[x] + i].find_coordinates();
                    killed = true;
                }
            }
        }
    }

    return killed;
}

function compareArrs(arr1, arr2) {
    return ((arr1[0] === arr2[0]) && (arr1[1] === arr2[1]));
}

class Piece {
    constructor(index, color) {
        this.index = index;
        this.color = color;
        this.location = -1;
        this.coords = this.find_coordinates(index, color, this.location);
    }

    find_coordinates() {
        let index = this.index;
        let color = this.color;
        let location = this.location;
        let x = 0;
        let y = 0;
        let colors = ["red", "blue", "yellow", "green"];
        if (location === -1) {
            let colorDis = [[0, 0], [11, 0], [11, 11], [0, 11]];
            let indexDis = [[0.5, 0.5], [2.5, 0.5], [2.5, 2.5], [0.5, 2.5]];

            x = indexDis[index][0] + colorDis[colors.indexOf(color)][0];
            y = indexDis[index][1] + colorDis[colors.indexOf(color)][1];
        } else {
            if (color === "red") {
                console.log("Red location: " + location);
                if (-1 < location && location < 4) {
                    console.log("WRIRD")
                    x = location;
                    y = 4;
                } else if (3 < location && location < 8) {
                    console.log("If statement reached");
                    x = 4;
                    y = 7 - location;
                } else if (7 < location && location < 13) {
                    x = location - 3;
                    y = 0;
                } else if (12 < location && location < 17) {
                    x = 10;
                    y = location - 13;
                } else if (16 < location && location < 21) {
                    x = location - 6;
                    y = 4;
                } else if (20 < location && location < 26) {
                    x = 14;
                    y = location - 16;
                } else if (25 < location && location < 30) {
                    x = 40 - location;
                    y = 10;
                } else if (29 < location && location < 34) {
                    x = 10;
                    y = location - 19;
                } else if (33 < location && location < 39) {
                    x = 42 - location;
                    y = 14;
                } else if (38 < location && location < 43) {
                    x = 4;
                    y = 53 - location;
                } else if (42 < location && location < 47) {
                    x = 46 - location;
                    y = 10;
                } else if (46 < location && location < 50) {
                    x = 0;
                    y = 56 - location;
                } else if (49 < location && location < 56) {
                    x = location - 49;
                    y = 7;
                } else if (location === 56) {
                    let indexDis = [[5, 5], [6, 5], [6, 6], [5, 6]];

                    x = indexDis[index][0]
                    y = indexDis[index][1]
                }
            }
            if (color === "blue") {
                console.log("Blue location: " + location);
                if (-1 < location && location < 4) {
                    x = 10;
                    y = location;
                } else if (3 < location && location < 8) {
                    x = location + 7;
                    y = 4;
                } else if (7 < location && location < 13) {
                    x = 14;
                    y = location - 3;
                } else if (12 < location && location < 17) {
                    x = 27 - location;
                    y = 10;
                } else if (16 < location && location < 21) {
                    x = 10;
                    y = location - 6;
                } else if (20 < location && location < 26) {
                    x = 30 - location;
                    y = 14;
                } else if (25 < location && location < 30) {
                    x = 4;
                    y = 40 - location;
                } else if (29 < location && location < 34) {
                    x = 33 - location;
                    y = 10;
                } else if (33 < location && location < 39) {
                    x = 0;
                    y = 43 - location;
                } else if (38 < location && location < 43) {
                    x = location - 39;
                    y = 4;
                } else if (42 < location && location < 47) {
                    x = 4;
                    y = 46 - location;
                } else if (46 < location && location < 50) {
                    x = location - 42;
                    y = 0;
                } else if (49 < location && location < 56) {
                    x = 7;
                    y = location - 49;
                } else if (location === 56) {
                    let indexDis = [[8, 5], [9, 5], [9, 6], [8, 6]];

                    x = indexDis[index][0]
                    y = indexDis[index][1]
                }
            }
            if (color === "yellow") {
                console.log("Yellow location: " + location);
                if (-1 < location && location < 4) {
                    x = 14 - location;
                    y = 10;
                } else if (3 < location && location < 8) {
                    x = 10;
                    y = location + 7;
                } else if (7 < location && location < 13) {
                    x = 17 - location;
                    y = 14;
                } else if (12 < location && location < 17) {
                    x = 4;
                    y = 27 - location;
                } else if (16 < location && location < 21) {
                    x = 20 - location;
                    y = 10;
                } else if (20 < location && location < 26) {
                    x = 0;
                    y = 30 - location;
                } else if (25 < location && location < 30) {
                    x = location - 26;
                    y = 4;
                } else if (29 < location && location < 34) {
                    x = 4;
                    y = 33 - location;
                } else if (33 < location && location < 39) {
                    x = location - 39;
                    y = 0;
                } else if (38 < location && location < 43) {
                    x = 10;
                    y = location - 39;
                } else if (42 < location && location < 47) {
                    x = location - 58;
                    y = 4;
                } else if (46 < location && location < 50) {
                    x = 14;
                    y = location - 55;
                } else if (49 < location && location < 56) {
                    x = 63 - location;
                    y = 7;
                } else if (location === 56) {
                    let indexDis = [[8, 8], [9, 8], [9, 9], [8, 9]];

                    x = indexDis[index][0]
                    y = indexDis[index][1]
                }
            }
            if (color === "green") {
                console.log("Green location: " + location);
                if (-1 < location && location < 4) {
                    x = 4;
                    y = 14 - location;
                } else if (3 < location && location < 8) {
                    x = 7 - location;
                    y = 10;
                } else if (7 < location && location < 13) {
                    x = 0;
                    y = 17 - location;
                } else if (12 < location && location < 17) {
                    x = location - 13;
                    y = 4;
                } else if (16 < location && location < 21) {
                    x = 4;
                    y = 20 - location;
                } else if (20 < location && location < 26) {
                    x = location - 16;
                    y = 0;
                } else if (25 < location && location < 30) {
                    x = 10;
                    y = location - 26;
                } else if (29 < location && location < 34) {
                    x = location - 41;
                    y = 4;
                } else if (33 < location && location < 39) {
                    x = 14;
                    y = location - 39;
                } else if (38 < location && location < 43) {
                    x = 53 - location;
                    y = 10;
                } else if (42 < location && location < 47) {
                    x = 10;
                    y = location - 54;
                } else if (46 < location && location < 50) {
                    x = 56 - location;
                    y = 14;
                } else if (49 < location && location < 56) {
                    x = 7;
                    y = 63 - location;
                } else if (location === 56) {
                    let indexDis = [[5, 8], [6, 8], [6, 9], [5, 9]];

                    x = indexDis[index][0]
                    y = indexDis[index][1]
                }
            }
        }
        console.log([x, y]);
        return [x, y]
    }

    updateButton() {
    }

    move(diceRoll) {
        if (this.location === -1) {
            if (diceRoll !== 6) {
                return false;
            }
            this.location = 0;
        } else {
            this.location += diceRoll;
            if (this.location === 4) {
                this.location = 16;
            } else if (this.location === 17) {
                this.location = 29;
            } else if (this.location === 30) {
                this.location = 42;
            } else if (this.location === 43) {
                this.location = 3;
            } else if (this.location > 56) {
                this.location = 112 - this.location;
            } else if (this.location === 56) {
                this.location = -2;
            }
        }
        this.coords = this.find_coordinates();
        console.log("Location: " + this.location + " Coords: " + this.coords);
        return true;
    }
}

class Game {
    constructor(names) {
        this.names = names;
        this.nameIdx = 0;
        this.turn = names[0];
        this.pieces = {};
        this.colors = ["Red", "Blue", "Yellow", "Green"];
        this.color = this.colors[this.nameIdx];
        for(let i = 0; i < 4; i++) {
            this.pieces["r" + i] = new Piece(i, "red");
            this.pieces["b" + i] = new Piece(i, "blue");
            this.pieces["y" + i] = new Piece(i, "yellow");
            this.pieces["g" + i] = new Piece(i, "green");
        }
    }

    canMove(diceRoll) {
        if(diceRoll === 6) {
            return true;
        }
        let start = "";
        if(this.nameIdx === 0) {
            start = "r";
        } else if(this.nameIdx === 1) {
            start = "b";
        } else if(this.nameIdx === 2) {
            start = "y";
        } else {
            start = "g";
        }
        for(let i = 0; i < 4; i++) {
            if(this.pieces[start + i].location >= 0) {
                return true;
            }
        }
        return false;
    }

    move(piece, diceRoll) {
        if(this.nameIdx === 0 && piece.charAt(0) !== 'r') {
            return false;
        }
        if(this.nameIdx === 1 && piece.charAt(0) !== 'b') {
            return false;
        }
        if(this.nameIdx === 2 && piece.charAt(0) !== 'y') {
            return false;
        }
        if(this.nameIdx === 3 && piece.charAt(0) !== 'g') {
            return false;
        }
        return this.pieces[piece].move(diceRoll);
    }

    changeTurn() {
        this.nameIdx++;
        if(this.nameIdx === this.names.length) {
            this.nameIdx = 0;
        }
        this.turn = this.names[this.nameIdx];
        this.color = this.colors[this.nameIdx];
    }
}

const express = require("express");
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;

const app = express();
// server.use((req, res) => res.sendFile(INDEX, { root: __dirname }))
//     .listen(PORT, () => console.log(`Listening on ${PORT}`));
app.use(express.static(__dirname));
const http = require('http').Server(app);
const io = socketIO(http);

let map = new Map();

let gameMap = {};

let rolls = {};

io.on('connection', (socket) => {
    socket.on('create', (name) => {
        let id = generateId();
        while (map.has(id)) {
            id = generateId();
        }
        map.set(id, []);
        map.get(id).push(name);
        socket.join(id);
        socket.emit('create-success', id);
        io.to(id).emit('player-join', map.get(id));
    });

    socket.on('join', (name, id) => {
       socket.join(id);
       map.get(id).push(name);
        io.to(id).emit('player-join', map.get(id));
    });

    socket.on('start', (id) => {
        gameMap[id] = new Game(map.get(id));
        io.to(id).emit('start-game');
        io.to(id).emit('board-change', gameMap[id]);
    });
    socket.on('move', (id, piece) => {
        let valid = gameMap[id].move(piece, rolls[id]);
        if(valid) {
            if(!kill(gameMap[id].pieces, gameMap[id].pieces[piece]) && rolls[id] !== 6) {
                gameMap[id].changeTurn();
            }
            io.to(id).emit('board-change', gameMap[id]);
        } else {
            socket.emit('failed-move');
        }
    });
    socket.on('roll', (id, dice) => {
        rolls[id] = dice;
        console.log(dice);
        socket.emit('rolled');
        if(!gameMap[id].canMove(dice)) {
            gameMap[id].changeTurn();
            io.to(id).emit('board-change', gameMap[id]);
        }
    });
});

http.listen(PORT, () => {
    console.log('listening on *:' + PORT);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const { networkInterfaces } = require('os');

const nets = networkInterfaces();
const results = Object.create(null); // Or just '{}', an empty object

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
}

console.log(results);

function generateId() {
    return Math.floor(Math.random() * 10000).toString();
}