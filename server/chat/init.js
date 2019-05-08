const initSocket = function(io) {
  io.on("connection", socket => {
    console.log("connected")

    socket.on('new message', (message) => {
      io.emit('new message', message)
    })
  })
}

module.exports = initSocket
