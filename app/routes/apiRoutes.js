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
   

 // Get friend with the best match
    var total_difference=0;
    var BestMach ={
        name : "",
        foto : "",
        total_difference : 55

    }
  var resta = [];
  var arrayMatch=[]
  
  for (var i = 0; i < dataFriends.length; i++) {
    var totaldifference =0;
            for (var j = 0; j < scoreConverted.length; j++) {
                
                totaldifference +=(Math.abs(scoreConverted[j] - dataFriends[i].scores[j])) ;
                       
            }
            resta.push(totaldifference) 

              /* for (var k = 0; k < resta.length; k++) {
                  if(res[k] >= resta[i]){
                      BestMach = 
                  }
                   
               }*/
   
}
console.log(resta);
   
   // dataFriends.push(newF);
   // res.send(newF);

});



module.exports=router;