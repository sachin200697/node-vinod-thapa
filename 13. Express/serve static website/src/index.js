const express = require('express');
const path = require('path');

const app = express();
console.log(__dirname);
//C:\Sachin\Udemy Web Development Courses\Node js\Node js Youtube\Development\13. Express\serve static website

// need to provide path of public folder
const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));

app.listen(8000, 'localhost');
