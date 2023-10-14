const express = require('express');
const friendsController = require('./controllers/friends.controllers');
const messageController = require('./controllers/message.controllers');
const app = express();
const port = 3000;
const friends = [
    {
        id:1,
        name:'Banupriya'
    },
    {
        id:2,
        name:'Dinesh'
    },
    {
        id:3,
        name:'Danam'
    },
    {
        id:4,
        name:'Sekar'
    },
    {
        id:5,
        name:'Bala'
    }

];
app.use((req,res,next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url}ms`);

})
app.use(express.json());

app.post('/friends',friendsController.postFriends );
app.get('/friends', friendsController.getFriends);

app.get('/friends/:friendId',friendsController.getFriend);

app.get('/messages',messageController.getMessage);

app.post('/message',messageController.postMessage)
app.listen(port, () => {
    console.log(`Listening on ${port}...`);
});