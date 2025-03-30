// const express = require('express');
// const app = express();
// const port = 3000;

// const adminRoute = express.Router();

// adminRoute.get('/dashboard', (req, res)=>{
//     // console.log(req.baseUrl); // /admin
//     console.log(req.originalUrl); // /admin/dashboard
//     console.log(req.url); // /dashboard
    
//     res.send('We are in Admin Dashboard');
// })

// app.use('/admin', adminRoute);

// app.get('/user/:id', (req, res)=>{
//     // console.log(req.baseUrl); 
//     console.log(req.originalUrl); // /user/5?filter=name
//     console.log(req.url); // /user/5?filter=name
    
//     res.send('Hello world');
// })

// app.listen(port, ()=>{
//     console.log('listening at port 3000');
    
// })

// ------------------------------------------------------------------->

// const express = require('express');
// const app = express();
// const port = 3000;

// const cookieParser = require('cookie-parser');
// app.use(cookieParser());

// const adminRoute = express.Router();

// adminRoute.get('/dashboard', (req, res)=>{
//     console.log(req.path); // /dashboard/
//     console.log(req.hostname); // localhost
//     console.log(req.ip); // ::1
//     console.log(req.method); // GET
//     console.log(req.protocol); // http
    
    
    
//     res.send('We are in Admin Dashboard');
// })

// app.use('/admin', adminRoute);

// app.get('/user/:id', (req, res)=>{
//     console.log(req.path); // /user/5
//     console.log(req.hostname); // localhost
//     console.log(req.ip); // ::1
//     console.log(req.method); // GET
//     console.log(req.protocol); // http
//     console.log(req.params); // { id: '5' }
//     console.log(req.params.id); // 5
//     console.log(req.query); // { filter: 'name' }
//     console.log(req.query.filter); // name
//     console.log(req.cookies); // 'undefined' without 'cookie-parser' library
//     console.log(req.secure); // false = for http
    
    
//     res.send('Hello world');
// })

// // app.use(express.json());

// // app.post(('/user/', (req, res)=>{
// //     console.log(req.body); // without express.json() returns 'undefined'
// //     res.send('Hello world post');
// // }))

 
// app.listen(port, ()=>{
//     console.log('listening at port 3000');
    
// })

// http://localhost:3000/admin/dashboard
// http://localhost:3000/user/5?filter=name

// ------------------------------------------------------------------->

const express = require('express');
const app = express();
const port = 3000;

const handler = require('./handler')

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const adminRoute = express.Router();

adminRoute.get('/dashboard', (req, res)=>{
    console.log(req.path); // /dashboard/
    res.send('We are in Admin Dashboard');
})

app.use('/admin', adminRoute);

app.get('/user/:id', handler);

app.post('/user/', (req, res)=>{
    console.log(req.route);
    res.send('hello world post');
})

app.get('/user/', (req, res)=>{
    console.log(req.route);
    res.send('hello world get');
})

// http:localhost:3000/user/
 
app.listen(port, ()=>{
    console.log('listening at port 3000');
    
})

// ------------------------------------------------------------------->



// ------------------------------------------------------------------->
// ------------------------------------------------------------------->