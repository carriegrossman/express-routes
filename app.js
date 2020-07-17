const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req,res)=>res.send("Hello World"));

//creating a route on get method for the api
app.get("/api", (req,res)=>res.send({"first":"Hello", "second":"World"}))

app.get("/api/cats", (req,res)=>res.send("Cats are in the API!"))

app.get("/cats", (req,res)=>res.send("Cats are great!"))

app.get("/cats/:name", (req,res)=>res.send(`Your cat's name is ${req.params.name}`))

app.get("/cats/:name/:age", (req,res)=>res.send(`Your cat is ${req.params.age} years old and their name is ${req.params.name}`))



app.get("*", (req,res)=>{
    res.status(404);
    res.send("You have an error")
})

app.listen(port, ()=>{
    console.log(`Listening on port http://localhost:${port}`)
})