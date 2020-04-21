const express= require("express");

//Run express
const app= express();

//Settings
app.set("Port", 8080);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routes
app.use(require("./app/routes/htmlRoutes"));
app.use(require("./app/routes/apiRoutes"))

//Start server
app.listen(app.get("Port"),()=>{
    console.log("Server Started on "+ app.get("Port"));
})