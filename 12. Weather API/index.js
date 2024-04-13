const http = require( 'http' )
const axios = require('axios')
const requests = require( 'requests' );

const server = http.createServer( async ( req, res ) => {
    if ( req.url === '/' )
    {
        const data = await axios.get( 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=989cf93cfc99eb260507ca354c590244' );
        console.log( data.data.list[0] );
        res.writeHead( 200, { "content-type": "application/json" } );
        res.end(JSON.stringify(data.data.list[0]))
    }
})


server.listen( 8000, 'localhost' );