const os = require( 'os' );

// check system is 32bit or 64bit
console.log( os.arch() );

// free space(ram)
const free_space_in_bytes = os.freemem();
console.log( ` Space in GB : ${free_space_in_bytes / 1024 / 1024 / 1024}` );

// free total space(ram)
const total_space_in_bytes = os.totalmem();
console.log( ` Space in GB : ${total_space_in_bytes / 1024 / 1024 / 1024}` );

//username
console.log( os.hostname() );   //DESKTOP-MOFFV0R

// currently running arch
console.log( os.platform() ); //win32

// operating system type
console.log(os.type()); //Windows_NT

