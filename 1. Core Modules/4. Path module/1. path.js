const path = require( 'path' )

// get the name of directory
console.log( path.dirname( 'C:\Sachin\Udemy Web Development Courses\Node js\Node js Youtube\Development\1. Core Modules\4. Path module\1. path.js' ) );


// get file extension name 
console.log( path.extname( 'C:\Sachin\Udemy Web Development Courses\Node js\Node js Youtube\Development\1. Core Modules\4. Path module\1. path.js' ) );
// op: .js

// name of file with path
console.log( path.basename( 'C:\Sachin\Udemy Web Development Courses\Node js\Node js Youtube\Development\1. Core Modules\4. Path module\1. path.js' ) );

// all details 
const parse_path = path.parse( 'C:\Sachin\Udemy Web Development Courses\Node js\Node js Youtube\Development\1. Core Modules\4. Path module\1. path.js' )
console.log( parse_path );
console.log(parse_path.name);