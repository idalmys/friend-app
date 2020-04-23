const express=require("express");
const router=express.Router();
const dataFriends= require("../data/friends")


router.get("/api/friends",(req,res)=>{
    res.json(dataFriends);
}) 
router.post("/api/friends",(req,res)=>{ 
     
     //Get the score 
    var scores = req.body.scores;

     // Convert to array
    var scoreConverted = scores.map(item=>{
        return parseInt(item,10);
    })

    // Create new Friend to send to api/friends
    var newF = {
        name:req.body.name,
        foto: req.body.foto,
        scores : scoreConverted
    }
   
    // substratc array of number and sunm the reult
    var resta = [];
 
  
  for (var i = 0; i < dataFriends.length; i++) {
    var totaldifference =0;
            for (var j = 0; j < scoreConverted.length; j++) {
                
                totaldifference +=(Math.abs(scoreConverted[j] - dataFriends[i].scores[j])) ;
                       
            }
            resta.push(totaldifference) 
         
            // grab the min value 
            var bestmach = Math.min(...resta);

            //Grab the position into the array 

            var position =resta.indexOf(bestmach);
}           
            // User with the least difference into the array
            var friendBest ={
                name: dataFriends[position].name,
                foto : dataFriends[position].foto,
                bestmatch : bestmach

            }
            
   
     dataFriends.push(newF);
     res.json(friendBest);
   

});



module.exports=router;