const express = require("express");
const app = express();
const port = 3002;



app.get('/', (req, res) => {
    res.send(`
    <nav>
        <a href="/">Home</a>
        <a href="/legal">Legal</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </nav>
    <p>
        I’m Not Superstitious But I Am A Little Stitious. - Michael Scott
    </p>
        `)
        });

app.get('/legal', (req, res) => {
    res.send(`
    <nav>
        <a href="/">Home</a>
        <a href="/legal">Legal</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </nav>
    <p>
        Legal Page....Legal Page....Legal Page....
    </p>
        `)
        });

app.get('/about', (req, res) => {
    res.send(`
    <nav>
        <a href="/">Home</a>
        <a href="/legal">Legal</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </nav>
    <p>
        About me page..
    </p>
        `)
        });

app.get('/contact', (req, res) => {
    res.send(`
    <nav>
        <a href="/">Home</a>
        <a href="/legal">Legal</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </nav>
    <p>
        Contact meeee..
    </p>
        `)
        });


app.get("*", (req,res)=>{
    res.status(404);
    res.send("You have an error")
})

app.listen(port, ()=>{
    console.log(`Listening on port http://localhost:${port}`)
})