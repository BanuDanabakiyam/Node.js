const express = require('express');
const path = require('path');
const friendsRouter = require('./routes/friends.router');
const messsageRouter = require('./routes/messages.router')

const app = express();
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views') );
const port = 3000;

app.use((req,res,next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);

})
app.use('/site',express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/',(req,res) => {
    res.render('index',{
        title:"professionalImage",
        caption:"Profession trendy girl image...!",
    })
})

app.use('/friends',friendsRouter)
app.use('/messages',messsageRouter)
app.listen(port, () => {
    console.log(`Listening on ${port}...`);
});