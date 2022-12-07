const sayHi = require('./Module')
const names = require('./PublicVar')
const data = require('./alternative')
console.log(data);
sayHi(names.f_name);
