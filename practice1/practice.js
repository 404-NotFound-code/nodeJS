// const express = require('express');
// const app = express();
// const port = 3001;

// app.use(express.json()); // Content-Type: application/json

// app.get('/', (req, res)=>{
//     res.send('This is home page');
// })

// app.post('/', (req, res)=>{
//     console.log(req.body);
//     console.log(typeof req.body);
//     res.send('This is home page with post request');
// })

// app.listen(port, ()=>{
//     console.log('listening at port 3001');
// })

// ----------------------------------------------------------------->

// const express = require('express');
// const app = express();
// const port = 3001;

// app.use(express.raw()); // Content-Type: application/octet-stream

// app.get('/', (req, res)=>{
//     res.send('This is home page');
// })

// app.post('/', (req, res)=>{
//     console.log(req.body);
//     console.log(req.body.toString());
//     console.log(typeof req.body);
//     res.send('This is home page with post request');
// })

// app.listen(port, ()=>{
//     console.log('listening at port 3001');
// })

// ----------------------------------------------------------------->

// const express = require('express');
// const app = express();
// const port = 3001;

// app.use(express.text()); // Content-Type: text/plain

// app.get('/', (req, res)=>{
//     res.send('This is home page');
// })

// app.post('/', (req, res)=>{
//     console.log(req.body);
//     console.log(typeof req.body);
//     res.send('This is home page with post request');
// })

// app.listen(port, ()=>{
//     console.log('listening at port 3001');
// })

// ----------------------------------------------------------------->

// const express = require('express');
// const app = express();
// const port = 3001;

// app.use(express.urlencoded()); // deprecated 

// app.get('/', (req, res)=>{
//     res.send('This is home page');
// })

// app.post('/', (req, res)=>{
//     console.log(req.body);
//     console.log(typeof req.body);
//     res.send('This is home page with post request');
// })

// app.listen(port, ()=>{
//     console.log('listening at port 3001');
// })

// ----------------------------------------------------------------->

// const express = require('express');
// const app = express();
// const port = 3001;

// app.use(express.static(__dirname + '/public/', {
//     index: 'home.html',
// })); 

// app.get('/', (req, res)=>{
//     res.send('This is home page');
// })

// app.post('/', (req, res)=>{
//     console.log(req.body);
//     console.log(typeof req.body);
//     res.send('This is home page with post request');
// })

// app.listen(port, ()=>{
//     console.log('listening at port 3001');
// })


// ----------------------------------------------------------------->


const express = require('express');
const app = express();
const port = 3001;

const router = express.Router({
    caseSensitive: true,
});
app.use(router);

router.get('/about', (req, res)=>{
    res.send('This is home page');
})

router.post('/', (req, res)=>{
    console.log(req.body);
    console.log(typeof req.body);
    res.send('This is home page with post request');
})

app.listen(port, ()=>{
    console.log('listening at port 3001');
})