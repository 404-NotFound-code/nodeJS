const express = require('express');
const router = express.Router();


// router.get('/', (req, res)=>{
//     res.send("<h1>I am a get request at home route</h1>");
//     res.end();
// })


router.get('/about', (req, res)=>{
    res.send("<h1>I am a get request at about route</h1>");
    res.end();
})

router.get('/contact', (req, res)=>{
    res.send("<h1>I am a get request at contact route</h1>");
    res.end();
})

module.exports = router;