const express = require('express');

const app = express();

app.set( 'view engine', 'hbs' ); //to use views folder files
// app.set( 'views', `${__dirname}/views_changed_name` );	//if we want to change the name of views folder then
// we need to tell it to express by setting the views to the new folders path 

app.use(express.static(`${__dirname}/public`)); //to use public folder files
// now we can assume that all views files and folders are present in public folder

// if we have same root more that once then only first will be serve
app.get('', (req, res) => {
	//'' and '/' are same
	res.render('index', { name: 'Sachin' }); //by default it will search for index.hbs inside views folder
});

// as '' is already present above so that will be render not the next one.
app.get('', (req, res) => {
	res.render('index');
});

app.listen(8000, 'localhost', () => {
	console.log('Server has started!!');
});
