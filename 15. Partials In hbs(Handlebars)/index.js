const express = require( 'express' );
const hbs = require( 'hbs' );

const app = express();

app.set( "view engine", 'hbs' );
hbs.registerPartials( `${__dirname}/views/partials` );

app.get( '', ( req, res ) => {
    res.render( "index" );
} )


app.listen( 8000, "localhost" );