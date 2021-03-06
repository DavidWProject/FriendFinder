
//Dependencies
var path = require('path');

//ROUTING

module.exports = function(app){
  //default GET route that leads to home.html - displays home page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });

  //a USE route to home page
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
};