function getMessage (req,res)  {
    res.send("Hi BUddy");
}
function postMessage (req,res)  {
    console.log('Updating messages...')
}
module.exports = {
    getMessage,
    postMessage,
}