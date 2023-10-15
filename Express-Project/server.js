const express = require('express');
const path = require('path');
const friendsRouter = require('./routes/friends.router');
const messsageRouter = require('./routes/messages.router')

const app = express();
app.set('view engine','hbs');
const port = 3000;

app.use((req,res,next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);

})
app.use('/site',express.static(path.join(__dirname, 'public')));
app.use(express.json());



app.use('/friends',friendsRouter)
app.use('/messages',messsageRouter)
app.listen(port, () => {
    console.log(`Listening on ${port}...`);
});