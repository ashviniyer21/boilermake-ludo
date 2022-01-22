const express = require("express");
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;

const app = express();
// server.use((req, res) => res.sendFile(INDEX, { root: __dirname }))
//     .listen(PORT, () => console.log(`Listening on ${PORT}`));
app.use(express.static(__dirname));
const http = require('http').Server(app);
const io = socketIO(http);

map = new Map();

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