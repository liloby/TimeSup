let io;

module.exports = {
    init,
    getIo
}

function init(http) {
    io = require('socket.io')(http);

    io.on('connection', function(socket) {
        console.log('Client is connected to socket');

        // Other message listeners below here (stay inside of this 'connection' callback)

        socket.on('add-message', function() {
            io.emit('add-message')
        })

    });
}

// Use for accessing the io object from controller modules

function getIo() {
    return io;
}