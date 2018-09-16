// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var http = require("http");
// var fs = require("fs");

// Set our port to 8080
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// var server = http.createServer(handleRequest);

// function handleRequest(req, res) {

//   // Capture the url the request is made to
//   var path = req.url;

//   // When we visit different urls, call the function with different arguments
//   switch (path) {

//   case "/survey":
//     return renderHTML(path + ".html", res);

//   default:
//     return renderHTML("/index.html", res);
//   }
// }

// // function to take a filepath and respond with html
// function renderHTML(filePath, res) {
//   return fs.readFile(__dirname + filePath, function(err, data) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(data);
//   });
// }

//ROUTER
require('./apiRoutes.js')(app); 
require('./htmlRoutes.js')(app);

// // Starts our server.
// server.listen(PORT, function() {
//   console.log("Server is listening on PORT: " + PORT);
// });

app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});
