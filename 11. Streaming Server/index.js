const express = require( 'express' );
const fs = require( 'fs' );

const app = express();

app.get( '/', ( req, res ) => {
    res.sendFile( __dirname + '/index.html' );
} )

app.get( '/video', ( req, res ) => {
    const range = req.headers.range;
    // console.log(range);
    console.log(req.headers);

    if ( !range )
    {
        res.status( 400 ).send( "Requires range header" );
    }

    const videoPath = "gal.mp4";
    const videoSize = fs.statSync( "gal.mp4" ).size;

    // Parse Range
    // Example: "bytes=32324-"
    const CHUNK_SIZE = 10 ** 6; // 10 to the power 6 = MB(mega byte);
    const start = Number( range.replace( /\D/g, "" ) ); //removing non digit characters
    const end = Math.min( start + CHUNK_SIZE, videoSize - 1 );

    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    }
    res.writeHead( 206, headers );

    const videoStream = fs.createReadStream( videoPath, { start, end } );
    videoStream.pipe( res );

})



app.listen( 8000, 'localhost', () => {
    console.log( "Server has started" );
})