const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

const io = new socketIo.Server({
    cors: {
        origin: '*'
    }
});

const chatgptRoutes = require('./routes')

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '50mb' }));
app.use('/api/chatgpt', chatgptRoutes);


io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('message', (message) => {
        io.emit('message', message); // Broadcast the message to all connected clients
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

io.listen(4001, () => {
    console.log('Socket is running on port 4001');
});

server.listen(3001, () => {
    console.log('Server is running on port 3001');
});
