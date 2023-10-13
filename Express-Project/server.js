const express = require('express');
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
app.get('/friends', (req,res) => {
    res.json(friends);
});

app.get('/friends/:friendId',(req,res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if(friend){
        res.status(200).json(friend);
        // manually telling status code
    } else{
        res.status(400).json({
            error:"Friend does not exist"
        });
    }
});
app.get('/messages',(req,res) => {
    res.send();
});
app.post('/message',(req,res) => {
    console.log('Updating messages...')
})
app.listen(port, () => {
    console.log(`Listening on ${port}...`);
});