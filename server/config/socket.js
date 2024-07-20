const { Server } = require('socket.io');
const http = require('http');

let io;
// this is really not necessary but just in case
module.exports = {
  init: function (server) {
    io = new Server(server, {
      cors: {
        origin: '*',
      },
    });
    console.log('socket initialized');

    // Socket.IO connection
    io.on('connection', (socket) => {
      console.log('New client connected');

    
      
      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
    return io;
  },
  getIO: function () {
    if (!io) {
      console.log('not found');
      throw new Error('Socket.io not initialized!');
    }
    return io;
  },
};