const express=require("express");

const router=express.Router();

const dataFriends= require("../data/friends")

router.get("/api/friends",(req,res)=>{
    res.json(dataFriends);
})
router.post("/api/friends",(req,res)=>{
    var newFriend = req.body;
    dataFriends.push(newFriend);
    res.send(newFriend);

})

module.exports=router;