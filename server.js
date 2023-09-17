const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new socketIo.Server({
    cors: {
        origin: '*'
    }
});

// new socket.Server(this.httpServer, {
//     cors: {
//         origin: '*'
//     },
//     pingInterval: 5000,
//     pingTimeout: 20000
// })

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('message', (message) => {
        io.emit('message', message); // Broadcast the message to all connected clients
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

io.listen(3001, () => {
    console.log('Socket is running on port 3001');
});

server.listen(3001, () => {
    console.log('Server is running on port 3001');
});
