function getMessage (req,res)  {
    res.send("Hi BUddy");
}
function postMessage (req,res)  {
    res.send('Updating messages...');
}
module.exports = {
    getMessage,
    postMessage,
}