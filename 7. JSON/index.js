// JS object
const person = {
	name: 'Sachin',
	age: 21,
	contact: '858958383',
};

// convert from js object to json
const jsonData = JSON.stringify(person);

// differenct b/w js object and JSON object
console.log(person); //{ name: 'Sachin', age: 21, contact: '858958383' }
console.log(jsonData); //{"name":"Sachin","age":21,"contact":"858958383"}

// differenct b/w js object and JSON object
console.log(person.name); //Sachin
console.log(jsonData.name); //undefined

// convert json obj to js object
const jsObj = JSON.parse(jsonData);
console.log(jsObj); //{ name: 'Sachin', age: 21, contact: '858958383' }
console.log(jsObj.name); //Sachin

// Task
/*
    1. Convert person object onso json object.
    2. Create a new file and write json object into it.
    3. Read file 
    4. Then convert this read json data into js object

*/

// 1
const jsonFileData = JSON.stringify(person);

const fs = require('fs');

// create and write data
fs.writeFile('./example.json', jsonFileData, (err) => {
	console.log(err);
});
// Note it will cause infinity loop if using nodemon

// read file
fs.readFile('example.json', 'utf-8', (err, data) => {
	if (!err) {
		console.log('File data:', data);
		const originalObj = JSON.parse(data); //File data: {"name":"Sachin","age":21,"contact":"858958383"}
		console.log(originalObj); //{ name: 'Sachin', age: 21, contact: '858958383' }
	} else console.log(err);
});

// to delete the file
// fs.unlink('./example.json', (err) => {
// 	console.log(err);
// });
