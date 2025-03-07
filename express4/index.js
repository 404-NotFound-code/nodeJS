const express = require('express');

const app = express();

// app.get("/products/:id", (req, res)=>{
//     res.send(`<h2>ID = ${req.params.id}</h2>`);
// });

app.get("/products/:id([0-9]+)", (req, res)=>{ // for more specific, /products/:id([0-9]{3})
    res.send(`<h2>ID = ${req.params.id}</h2>`);
});

app.get("/products/:title([a-zA-Z0-9]+)", (req, res)=>{
    res.send(`<h2>TITLE = ${req.params.title}</h2>`);
})

app.use("*", (req, res)=>{ // * wildcard (not a valid route)
    res.status(404).send({
        message: 'not a valid route',
    })
})

app.listen(3000, ()=>{
    console.log("http://localhost:3000");
    
})