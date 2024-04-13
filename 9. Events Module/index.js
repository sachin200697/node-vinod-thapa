/*
    const EventEmitter = require('events');
    In case of event, we give variable name as EventEmitter(capital cammer case notation), it is because in above
    case we are creating a class. 
    But in other cases like const fs = require('fs'); we were not creating a class.

    As we are on server, so we can not use addEventListener, onClick, onChange ...etc. But we can create out
    events using events module. We can create, fire and listen a event.
*/

// if we don't use const EventEmitter = require('events'); then we can also use like below.
/*
const event = require( 'events' );  //event has a class EventEmitter
const myEvent = new event.EventEmitter();
*/

const EventEmitter = require( 'events' );
const event = new EventEmitter();

//listening an event 
// we need to listen first then need to fire the event second otherwise it will not work
event.on( 'myEvent', () => {
    console.log("On this event do some work here");
} )

// firing an event
event.emit( 'myEvent' );

// we can listen an event more that once 
// -------------------------------------
event.on( 'click', () => {
    console.log('Take inputs');
} )

event.on( 'click', () => {
    console.log("Validate inputs");
})

event.on( 'click', () => {
    console.log('submit inputs');
})

event.emit( 'click' );

// Events with parameters
// -----------------------
event.on( 'checkPage', (statusCode, message) => {
    console.log(`This page has status code ${statusCode} and it is ${message}`);
})

event.emit( 'checkPage', 200, 'OK' );   //on file op: This page has status code 200 and it is OK



