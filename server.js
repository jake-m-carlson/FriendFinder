var express = require('express')
var app = express()
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.get('/', function (req, res) {
  res.send('Hello World')
  // successfully connected **
})
 

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
    // success
  });