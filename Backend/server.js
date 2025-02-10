const http = require("http");
const app = require("./app");
const port = process.env.PORT || 3000;

const server = http.createServer(app);

const { initializeSocket } = require("./socket");

// Initialize socket.io using the HTTP server instance
initializeSocket(server);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
