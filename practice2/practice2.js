// application object()

// const express = require('express');
// const app = express();
// const port = 3000;

// app.locals.title = 'My express application';

// app.get('/', (req, res)=>{
//     console.log(app.locals.title);
//     res.send('This is home page');
// })

// app.listen(port, ()=>{
//     console.log('listening at port 3000');
// })

// ------------------------------------------------>

// const express = require('express');
// const handle = require('./handle');
// const app = express();
// const port = 3000;

// app.locals.title = 'My express application';

// app.get('/', handle);

// app.listen(port, ()=>{
//     console.log('listening at port 3000');
// })

// ------------------------------------------------>

// const express = require('express');
// const app = express();
// const port = 3000;

// const admin = express();

// // admin.on('mount', (parent)=>{
// //     console.log("Admin Mounted");
// //     console.log(parent); // refers to the parent app   
// // })

// admin.get('/dashboard', (req, res)=>{
//     console.log(admin.mountpath); // /admin
//     res.send('Welcome to admin dashboard');
// })

// app.get('/', (req, res)=>{
//     res.send('Welcome to application home page');
// })

// app.use('/admin', admin);

// app.listen(port, ()=>{
//     console.log('listening at port 3000');
// })

// ------------------------------------------------>

// const express = require('express');
// const app = express();
// const port = 3000;

// app.all('/', (req, res)=>{
//     res.send("Welcome to all");
// })

// app.listen(port, ()=>{
//     console.log('listening at port 3000');
// })

// ------------------------------------------------>

// const express = require('express');
// const app = express();
// const port = 3000;

// app.enable('case sensitive routing');
// app.disable('case sensitive routing');

// app.all('/about', (req, res)=>{
//     res.send("Welcome to all");
// })

// app.listen(port, ()=>{
//     console.log('listening at port 3000');
// })

// ------------------------------------------------>

// const express = require('express');
// const app = express();
// const port = 3000;

// app.param('id', (req, res, next, id)=>{
//     const user = {
//         userid: id,
//         name: 'Bangladesh'
//     };
//     req.userDetails = user;
//     next();
// })

// app.get('/user/:id', (req, res)=>{
//     console.log(req.userDetails); // { userid: '799', name: 'Bangladesh' }
//     res.send("Welcome to all");
// })

// app.listen(port, ()=>{
//     console.log('listening at port 3000');
// })

// ------------------------------------------------>

// const express = require('express');
// const app = express();
// const port = 3000;

// app.route('/about/mission')
//     .get((req, res)=>{
//         res.send('Welcome to application home get');
//     })
//     .post((req, res)=>{
//         res.send('Welcome to application home post');
//     })
//     .put((req, res)=>{
//         res.send('Welcome to application home put');
//     })

// app.listen(port, ()=>{
//     console.log('listening at port 3000');
// })

// ------------------------------------------------>

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.route('/about/mission')
    .get((req, res)=>{
        res.render('views/pages/about.ejs');
    })
    .post((req, res)=>{
        res.send('Welcome to application home post');
    })
    .put((req, res)=>{
        res.send('Welcome to application home put');
    })

app.listen(port, ()=>{
    console.log('listening at port 3000');
})

// ------------------------------------------------>



// ------------------------------------------------>



// ------------------------------------------------>

