const http = require('http');

const PORT = 3000;

const server = http.createServer();
server.on('request',(req,res) => {
    if(req.url === '/friends'){
    // res.writeHead(200, {
    //     'Content-Type': 'application/json',
    // });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        id:1,
        name:"Hello Mam You did a great job"
    }));
} else if(req.url === '/messages'){
    res.setHeader('Content-Type', 'text/html');

    res.write('<html>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>Hi Mam, You did great job</li>');
    res.write('<li>What your next move</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    res.end();

} else{
    res.statusCode = 404;
    res.end();
}
});

server.listen(PORT,() => {
    console.log(`Listening on port ${PORT}...`);
});
// When you run this code, it will start an HTTP server that listens on port 3000. When a client makes a request to this server, it will respond with the "Hello! Mam Congrajulation for your work"
//  message with a 200 OK status code.