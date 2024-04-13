const express = require( 'express' );
const hbs = require( 'hbs' );

const app = express();

app.use(express.static(`${__dirname}/public`))

app.set( "view engine", 'hbs' );
hbs.registerPartials( `${__dirname}/views/partials` );

app.get( '/', ( req, res ) => {
    res.render( "index" );
} )


// handling remaining routes after about 
app.get( '/about/*', ( req, res ) => {
    res.render( "error", { error: "Opps this about page not fount" } );
} )

// handling remaining routes after home
app.get( '*', ( req, res ) => {
    res.render( "error", { error: "Opps page not found" } );
})

app.listen( 8000, "localhost" );