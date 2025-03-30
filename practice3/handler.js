const handler = (req, res)=>{
    // console.log(req.app.get('view engine')); 
    // console.log(req.accepts("html")); // Accept: text/html, */* (for all)
    // console.log(req.accepts("json")); // Accept: application/json
    
    console.log(req.get('accept'));
    console.log(req.get('ConteNt-TypE')); // case insensitive
    
    
    res.send('Hello world');
}

module.exports = handler;