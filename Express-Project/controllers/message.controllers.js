const path = require('path');
function getMessage (req,res)  {
    res.sendFile(path.join(__dirname,'..','public','image', 'photo.jpg'));
}
function postMessage (req,res)  {
    res.send('Updating messages...');
}
module.exports = {
    getMessage,
    postMessage,
}