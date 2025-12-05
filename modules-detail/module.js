console.log(arguments)
console.log(require("module").wrapper)
//where require comes from??
//Ans: it is self invoking function
// (function (exports, require, module, __filename, __dirname) {
//     // module code actually lives in here
// })();
//---------------
//module.exports example
const calculator = require("./export-module-1")
const calc = new calculator()
console.log(calc.add(2,3))
//--------------
//exports example
const calc2 = require("./export-module-2")
console.log(`using simple exports`,calc2.add(5,7))  
//we can destructure as well
const {subtract,add} = require("./export-module-2")
console.log(`using destructuring`,subtract(10,4))  
//--------------
//caching example
require("./export-module-3")()
require("./export-module-3")()
require("./export-module-3")()
//see the console ,it will be executed only once because of caching
//--------------
