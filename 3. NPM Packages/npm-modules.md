## Validator:

To validate many things npm i validator.

const validate = requuire('validator')
console.log(validate.isEmail("sk@bar.com")) //true

## How to check all methods available in a module:

console.log(validate); //to check what methods vaailable
console.log(Object.keys(validate)); ////to check what methods vaailable

## nodemon

To run the server continuously. It automatically watches the changes

npm i nodemon

IN package.json file write in scripts:

"server" : "nodemon index.js"

## Chalk: But it is not supported now.

npm i chalk

This package is used to make output colorful and more interactive on
commandline.

const chalk = require('chalk');

console.log(chalk.blue("Sachin")) //to make Sachin blue
console.log(chalk.blue.italic("Sachin")) //to make Sachin blue and italic
console.log(chalk.blue.underline("Sachin")) //to make Sachin blue and give a
underline console.log(chalk.blue.underline.inverse("Sachin")) //to make Sachin
background blue and change
