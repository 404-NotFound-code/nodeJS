var people = ['messi', 'ronaldo', 'neymar'];

var a = 6;
function test(){
    console.log("test");
}

// console.log(module);

// {
//     id: '.',
//     path: 'C:\\Users\\Lenovo\\Desktop\\node\\node0',
//     exports: {},
//     filename: 'C:\\Users\\Lenovo\\Desktop\\node\\node0\\people.js',
//     loaded: false,
//     children: [],
//     paths: [
//       'C:\\Users\\Lenovo\\Desktop\\node\\node0\\node_modules',
//       'C:\\Users\\Lenovo\\Desktop\\node\\node_modules',
//       'C:\\Users\\Lenovo\\Desktop\\node_modules',
//       'C:\\Users\\Lenovo\\node_modules',
//       'C:\\Users\\node_modules',
//       'C:\\node_modules'
//     ],
//     [Symbol(kIsMainSymbol)]: true,
//     [Symbol(kIsCachedByESMLoader)]: false,
//     [Symbol(kURL)]: undefined,
//     [Symbol(kFormat)]: undefined,
//     [Symbol(kIsExecuting)]: true
//   }

module.exports = people;

module.exports = {
    people: people,
    a: a,
    test: test
}