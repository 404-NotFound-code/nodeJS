const express = require('express');
const app = express();
const PORT = 3001;

app.get("", (req, res)=>{
    const id = req.header('id')
    const fullName = req.header('fullName');
    

    res.send(`<h1>Student ID: ${id}, Fullname: ${fullName}</h1>`); // see using postman
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})