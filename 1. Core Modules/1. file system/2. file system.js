const fs = require( 'fs' );

// current working directory
console.log( __dirname );
// op: C:\Sachin\Udemy Web Development Courses\Node js\Node js Youtube\Development\1. Core Modules

// creating a folder if not already exists
if(!fs.existsSync(`${__dirname}/example`))
    fs.mkdirSync( 'example');

// creating a file 
fs.writeFileSync( `${__dirname}/example/example.txt`, 'This is example file' );

// overriding the file(replace)
fs.writeFileSync( `${__dirname}/example/example.txt`, "Data has replaced now. " );

// appending data
fs.appendFileSync(`${__dirname}/example/example.txt`, 'This is appended data. ')

// reading data in string form
// utf-8 will give the data of file into string format instead of buffer form
const direct_string_data = fs.readFileSync( 'example/example.txt', 'utf-8' );
console.log( direct_string_data );    //op: Data has replaced now. This is appended data.

// rename file
fs.renameSync( `${__dirname}/example/example.txt`, `${__dirname}/example/renamed_example.txt` );

// remove the file
fs.unlinkSync( 'example/renamed_example.txt' );

// remove folder
fs.rmdirSync( `${__dirname}/example` );
