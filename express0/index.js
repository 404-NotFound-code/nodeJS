const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send("<h1><i>Hello World!</i></h1>");
})

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
})
