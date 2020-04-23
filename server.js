const express= require("express");
const path=require("path");

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

//Public
app.use(express.static(path.join(__dirname,"../public")));

//Start server
app.listen(app.get("Port"),()=>{
    console.log("Server started on "+ app.get("Port"));
})