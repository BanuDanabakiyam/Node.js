const http = require('http');

const PORT = 3000;

const server = http.createServer();
server.on('request',(req,res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
    });
    res.end(JSON.stringify({
        id:1,
        name:"Hello Mam You did a great job"
    }));
});

server.listen(PORT,() => {
    console.log(`Listening on port ${PORT}...`);
});
// When you run this code, it will start an HTTP server that listens on port 3000. When a client makes a request to this server, it will respond with the "Hello! Mam Congrajulation for your work"
//  message with a 200 OK status code.