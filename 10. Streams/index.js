/*
Streams: It is an instance of EventEmitter class
Watching video, listening audo live.

Types:
Readable
Writable
Duplex: Readable + Writable
Transform: Duplex with output is composed based on input.

Events of stream:
data - fire once data is available 
end - fire once no more data to read
error - fire if any error occurs
finish - fire when all data is flushed from the system

*/

// Reading file with streams
const http = require( 'http' );
const fs = require( 'fs' );

const server = http.createServer();

// making a request using event
server.on( 'request', ( req, res ) => {
    // first way: without stream
    // fs.readFile( 'file.txt', ( err, data ) => {
    //     if ( err ) return console.error( err );
    //     res.end( data.toString() );
    // })  

    // using streams
    // const readStream = fs.createReadStream( 'C:/Users/HP 14-dh1026TX/Downloads/gal.mp4' );
    const readStream = fs.createReadStream( 'file.txt' );
    // use of events available: data, end, error, finish
    readStream.on( 'data', chunkData => {
        res.write( chunkData );
    } );

    readStream.on( 'end', () => {
        res.end();
    } )
    
    readStream.on( 'error', err => {
        console.log( err );
        res.end('File not found')
    } )
    

    // instead of writing the above code for stream, we can simply write below code as well
    const readSecondStream = fs.createReadStream( 'file.txt' );
    readSecondStream.pipe( res );
} )

server.listen( 8000, 'localhost', () => {
    console.log("Server started");
})