require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res)=>{
    res.send("Hello this is home page");
})

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
})

/*
.env file = environmental file
select/hidden file - only you can access it

Use .env file to store private environment variables for your application.For example:
1. http PORT to listen the server
2. Database URL
3. API keys

Gitlab/Heroku support the usage of environement variables.
*/