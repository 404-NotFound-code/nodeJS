const express = require('express');
const app = express();
const PORT = 3001;

app.get("/", (req, res)=>{
    const id = req.query.id;
    const name = req.query.name;

    // const {id2, name2} = req.query; // same as previous 2 line

    // res.send("Hello, This is Home Page");
    // res.send(`Student ID: ${id}`);
    res.send(`Student ID: ${id}, Name: ${name}`); // http://localhost:3001/?id=100&name=proshanta
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})