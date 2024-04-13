/*
// How to run the program 
> node program_name.js 

*/

const fs = require( 'fs' );

/*
    writeFileSync:  It will create the file if file does not exist or will replace the content to existig one.
    --------------  Performs the operations synchronously. 
    It does not create a new folder for example:
    fs.writeFileSync("example/file.txt", "hello");  //will give error example does not exist.
                    
*/
fs.writeFileSync( `file1.txt`, "This is the first file to create" );

// replace the content
fs.writeFileSync( `file1.txt`, "This is first line of first file" );

// append to the existing file
fs.appendFileSync( 'file1.txt', "\nThis is second line of first file" );

// read the data
const buffer = fs.readFileSync( 'file1.txt' );
console.log( buffer );
// output: 
// <Buffer 54 68 69 73 20 69 73 20 66 69 72 73 74 20 6c 69 6e 65 20 6f 66 20 66 69 72 73 74 20 66 69 6c 65 0a 54 68 69 73 20 69 73 20 73 65 63 6f 6e 64 20 6c 69 ... 16 more bytes > 
/*
Node js has a special data type Buffer. When we read file like above then we get file data in Buffer type.
Buffer Data: It is used to store binery data.
*/

// get data into string form
const string_data = buffer.toString();
console.log( string_data );
// output:
// This is first line of first file
// This is second line of first file

// to rename the file
fs.renameSync( 'file1.txt', 'file_system.txt' );



