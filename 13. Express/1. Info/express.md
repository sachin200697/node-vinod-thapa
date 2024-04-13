express: A node framework to create server, create routes and do many things easily.

We don't need to convert an js object to json object to send it using express because express
automatically do that. But if we convert js object to json object using obj.json() then it give 
an advantage to convert null and undefined values to valid json.

express does not convert a null or undefined value to json and may give error.

How to serve static website using express:
1. Create a public folder
2. Put all files like index.html and css/style.css and images
3. use a middleware of express:
    express.use(express.static(absolute_path_of_public_folder));