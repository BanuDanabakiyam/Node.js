function postFriends (req,res) {
    if(!req.body.name){
        return res.status(400).json({
            error: "Missing Friend Name"
        });
    }
    const newFriend = {
        name : req.body.name,
        id : friends.length
    };
    console.log(newFriend.name);
    friends.push[newFriend];
    res.json(newFriend);
}

function getFriends (req,res) {
    res.json(friends);
}

function getFriend (req,res){
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
}
module.exports = {
     
    postFriends,
    getFriends,
    getFriend,
};