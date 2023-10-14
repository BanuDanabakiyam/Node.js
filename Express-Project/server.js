const express = require('express');
const friendsController = require('./controllers/friends.controllers');
const messageController = require('./controllers/message.controllers');
const app = express();
const port = 3000;

app.use((req,res,next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url}ms`);

})
app.use(express.json());
const friendsRouter = express.Router();

app.post('/',friendsController.postFriends );
app.get('/', friendsController.getFriends);

app.get('/:friendId',friendsController.getFriend);
app.use('/friends',friendsRouter)
app.get('/messages',messageController.getMessage);

app.post('/message',messageController.postMessage)
app.listen(port, () => {
    console.log(`Listening on ${port}...`);
});