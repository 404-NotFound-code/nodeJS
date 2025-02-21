const express = require('express');
const app = express();
const PORT = 3001;

app.get("/userId/:id/userAge/:age", (req, res)=>{
    const id = req.params.id;
    const age = req.params.age;

    res.send(`<h1>Student ID: ${id}, Age: ${age}</h1>`); // http://localhost:3001/userId/103/userAge/34
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})