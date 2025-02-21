// URL module = splits up a web address into readable parts

let url = require('url');
let address = 'http://localhost:8080/default.htm?year=2017&month=february';

// parse an address with parse() method, which return a URL object with each part of the address as properties
let parse = url.parse(address, true); // method takes a URL string, parses it, and returns a URL object.

console.log(parse.host); // localhost:8080
console.log(parse.pathname); // /default.htm
console.log(parse.search); // ?year=2017&month=february

console.log(parse.hostname); // localhost
console.log(parse.path); // /default.htm?year=2017&month=february

console.log(parse.protocol); // http:
console.log(parse.hash); // null
console.log(parse.port); // 8080

console.log(parse.query); // [Object: null prototype] { year: '2017', month: 'february' }

console.log(parse.slashes); // true
