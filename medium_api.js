const express = require("express");
const app = express();
const port = 3003;

const animals =
[
    {
        id:1,
        name:"Rainbow",
        age:3,
        color:'white',
        type:"cat"
    },
    {
        id:2,
        name:"Shadow",
        age:2,
        color:'brown',
        type:"cat"
    },
    {
        id:3,
        name:"puddles",
        age:4,
        color:'brown',
        type:"cat"
    },
    {
        id:4,
        name:"Sir Barks Alot",
        age:5,
        color:'black',
        type:"dog"
    },
    {
        id:5,
        name:"Daisy",
        age:6,
        color:'Yellow',
        type:"dog"
    },
    {
        id:6,
        name:"Molly",
        age:4,
        color:'white',
        type:"dog"
    }        
]


app.get('/', (req, res) => {
    res.send("Animals!")
            });

// const animalCat = (item) =>{
//   return item.type == "cat";
// }

// const animalDog = (item) =>{
//     return item.type == "dog";
//   }

app.get("/animals", (req,res)=>res.json((animals)));
// app.get("/animals/cats", (req,res)=>res.json(animals.filter(animalCat)))
app.get("/animals/cats", (req,res)=>res.json(animals.filter(animal=>animal.type === "cat")));
// app.get("/animals/dogs", (req,res)=>res.json(animals.filter(animalDog)))
app.get("/animals/dogs", (req,res)=>res.json(animals.filter(animal=>animal.type === "dog")));

// const findBy = (attribute,value)=>animal.filter(animal=>animal[attribute])

// app.get('/:id', (req, res) =>{
//     res.json("I need the id");
// });

app.get('/animals/:id', (req, res) =>{
    const found = animals.filter(animal => animal.id === parseInt(req.params.id))
    if (found.length > 0) {
        res.json(found);
    } else {
        res.status(400).json({ msg: `There is not an animal with id:${req.params.id}`});
    }
});


app.get("*", (req,res)=>{
    res.status(404);
    res.send("You have an error")
})

app.listen(port, ()=>{
    console.log(`Listening on port http://localhost:${port}`)
})
