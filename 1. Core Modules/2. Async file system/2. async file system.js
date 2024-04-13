// to work in the current working folder, always run the program from CMD(on the current path)
// if we run the program usihng right click then run, or run using button, in that case working directory
//   will be different and we may get some exception or error.
// to avoid that exception or error we can use __dirname predefined variable as well

const fs = require( 'fs' );

// create folder
if ( !fs.existsSync( 'async example' ) )
{
    fs.mkdir( 'async example', err => {
        console.log(err);
    } )
}

// create file
if ( fs.existsSync( 'async example/async.txt' ) )
{
    fs.writeFile( 'async example/async.txt', 'Initial data', ( err ) => {
        console.log(err);
    })
}

// override file
fs.writeFile( 'async example/async.txt', 'replaced data ', ( err ) => {
    console.log(err);
})

// append
fs.appendFile( 'async example/async.txt', '. New data', err => {
    console.log(err);
} );

// read buffered data
fs.readFile( 'async example/async.txt', ( err, data ) => {
    console.log(data);
} )

// read string data
fs.readFile( 'async example/async.txt', 'utf-8', ( err, data ) => {
    console.log(data);
} )

// rename file
fs.rename( 'async example/async.txt', 'async example/replaced_async.txt', ( err ) => {
    console.log( 'File renamed' );
} );


// to work below two methods (1. remove file(unlink) and 2. remove folder(rmdir)),  
// first comment all code, except require('fs')
// delete file
fs.unlink( 'async example/replaced_async.txt', ( err ) => {
    console.log('File deleted');
} )

// delete folder
fs.rmdir( 'async example', ( err ) => {
    console.log(err);
} )