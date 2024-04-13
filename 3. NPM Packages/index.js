const validate = require('validator');

console.log(validate.isEmail('sk@bar.com')); //true
console.log(validate.isEmail('sk.com@gmail.com')); //true
console.log(validate.isEmail('sachinh')); //false

// console.log(validate); //to check what methods vaailable
// console.log(Object.keys(validate));  ////to check what methods vaailable

// only for strings
console.log(validate.equals('x', 'Y')); //false
console.log(validate.equals('x', 'x')); //true
