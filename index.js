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
            let indexDis = [[0, 0], [3, 0], [3, 3], [0, 3]];

            x = indexDis[index][0] + colorDis[colors.indexOf(color)][0];
            y = indexDis[index][1] + colorDis[colors.indexOf(color)][1];
        } else {
            if (color === "red") {
                if (-1 < location < 4) {
                    x = location;
                    y = 4;
                } else if (3 < location < 8) {
                    x = 4;
                    y = 7 - location;
                } else if (7 < location < 13) {
                    x = location - 3;
                    y = 0;
                } else if (12 < location < 17) {
                    x = 10;
                    y = location - 13;
                } else if (16 < location < 21) {
                    x = location - 6;
                    y = 4;
                } else if (20 < location < 26) {
                    x = 14;
                    y = location - 16;
                } else if (25 < location < 30) {
                    x = 40 - location;
                    y = 10;
                } else if (29 < location < 34) {
                    x = 10;
                    y = location - 19;
                } else if (33 < location < 39) {
                    x = 42 - location;
                    y = 14;
                } else if (38 < location < 43) {
                    x = 4;
                    y = 53 - location;
                } else if (42 < location < 47) {
                    x = 46 - location;
                    y = 10;
                } else if (46 < location < 50) {
                    x = 0;
                    y = 56 - location;
                } else if (49 < location < 56) {
                    x = location - 49;
                    y = 7;
                } else if (location === 56) {
                    let indexDis = [[5, 5], [6, 5], [6, 6], [5, 6]];

                    x = indexDis[index][0]
                    y = indexDis[index][1]
                }
            }
            if (color === "blue") {
                if (-1 < location < 4) {
                    x = 10;
                    y = location;
                } else if (3 < location < 8) {
                    x = location + 7;
                    y = 4;
                } else if (7 < location < 13) {
                    x = 14;
                    y = location - 3;
                } else if (12 < location < 17) {
                    x = 27 - location;
                    y = 10;
                } else if (16 < location < 21) {
                    x = 10;
                    y = location - 6;
                } else if (20 < location < 26) {
                    x = 30 - location;
                    y = 14;
                } else if (25 < location < 30) {
                    x = 4;
                    y = 40 - location;
                } else if (29 < location < 34) {
                    x = 33 - location;
                    y = 10;
                } else if (33 < location < 39) {
                    x = 0;
                    y = 43 - location;
                } else if (38 < location < 43) {
                    x = location - 39;
                    y = 4;
                } else if (42 < location < 47) {
                    x = 4;
                    y = 46 - location;
                } else if (46 < location < 50) {
                    x = location - 42;
                    y = 0;
                } else if (49 < location < 56) {
                    x = 7;
                    y = location - 49;
                } else if (location === 56) {
                    let indexDis = [[8, 5], [9, 5], [9, 6], [8, 6]];

                    x = indexDis[index][0]
                    y = indexDis[index][1]
                }
            }
            if (color === "yellow") {
                if (-1 < location < 4) {
                    x = 14 - location;
                    y = 10;
                } else if (3 < location < 8) {
                    x = 10;
                    y = location + 7;
                } else if (7 < location < 13) {
                    x = 17 - location;
                    y = 14;
                } else if (12 < location < 17) {
                    x = 4;
                    y = 27 - location;
                } else if (16 < location < 21) {
                    x = 20 - location;
                    y = 10;
                } else if (20 < location < 26) {
                    x = 0;
                    y = 30 - location;
                } else if (25 < location < 30) {
                    x = location - 26;
                    y = 4;
                } else if (29 < location < 34) {
                    x = 4;
                    y = 33 - location;
                } else if (33 < location < 39) {
                    x = location - 39;
                    y = 0;
                } else if (38 < location < 43) {
                    x = 10;
                    y = location - 39;
                } else if (42 < location < 47) {
                    x = location - 58;
                    y = 4;
                } else if (46 < location < 50) {
                    x = 14;
                    y = location - 55;
                } else if (49 < location < 56) {
                    x = 63 - location;
                    y = 7;
                } else if (location === 56) {
                    let indexDis = [[8, 8], [9, 8], [9, 9], [8, 9]];

                    x = indexDis[index][0]
                    y = indexDis[index][1]
                }
            }
            if (color === "green") {
                if (-1 < location < 4) {
                    x = 4;
                    y = 14 - location;
                } else if (3 < location < 8) {
                    x = 7 - location;
                    y = 10;
                } else if (7 < location < 13) {
                    x = 0;
                    y = 17 - location;
                } else if (12 < location < 17) {
                    x = location - 13;
                    y = 4;
                } else if (16 < location < 21) {
                    x = 4;
                    y = 20 - location;
                } else if (20 < location < 26) {
                    x = location - 26;
                    y = 0;
                } else if (25 < location < 30) {
                    x = 10;
                    y = location - 26;
                } else if (29 < location < 34) {
                    x = location - 41;
                    y = 4;
                } else if (33 < location < 39) {
                    x = 14;
                    y = location - 39;
                } else if (38 < location < 43) {
                    x = 53 - location;
                    y = 10;
                } else if (42 < location < 47) {
                    x = 10;
                    y = location - 54;
                } else if (46 < location < 50) {
                    x = 56 - location;
                    y = 14;
                } else if (49 < location < 56) {
                    x = 7;
                    y = 63 - location;
                } else if (location === 56) {
                    let indexDis = [[5, 8], [6, 8], [6, 9], [5, 9]];

                    x = indexDis[index][0]
                    y = indexDis[index][1]
                }
            }
        }
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
        return true;
    }
}

class Game {
    constructor(names) {
        this.names = names;
        this.nameIdx = 0;
        this.turn = names[0];
        this.pieces = {};
        for(let i = 0; i < 4; i++) {
            this.pieces["r" + i] = new Piece(i, "red");
            this.pieces["b" + i] = new Piece(i, "blue");
            this.pieces["y" + i] = new Piece(i, "yellow");
            this.pieces["g" + i] = new Piece(i, "green");
        }
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
        if(this.nameIdx === 4) {
            this.nameIdx = 0;
        }
        this.turn = this.names[this.nameIdx];
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
            gameMap[id].changeTurn();
            io.to(id).emit('board-change', gameMap[id]);
        } else {
            socket.emit('failed-move');
        }
    });
    socket.on('roll', (id, dice) => {
        rolls[id] = dice;
    });
});

http.listen(PORT, () => {
    console.log('listening on *:' + PORT);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

function generateId() {
    return Math.floor(Math.random() * 10000).toString();
}