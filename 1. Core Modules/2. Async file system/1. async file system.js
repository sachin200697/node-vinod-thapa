const fs = require( 'fs' )

// to work asyn, we need to provide call back to the functions
fs.writeFile( 'async_file_system.txt', 'This is my async data. ', (err) => {
    if ( !err ) console.log( 'File is created successfully' );
    else console.log(err);
} )

// to append
fs.appendFile( 'async_file_system.txt', 'This is appended data. ', err => {
    if(!err) console.log("Data has been appended.");
} )

// read buffered data
fs.readFile( 'async_file_system.txt', ( err, data ) => {
    if ( !err ) console.log( data );
    //op: 
    //<Buffer 54 68 69 73 20 69 73 20 6d 79 20 61 73 79 6e 63 20 64 61 74 61 2e 20 54 68 69 73 20 69 73 20 61 70 70 65 6e 64 65 64 20 64 61 74 61 2e 20>
} )

// read string data
fs.readFile( 'async_file_system.txt', 'utf-8', ( err, data ) => {
    if ( !err ) console.log( data );
    //op: This is my async data. This is appended data.
   
})