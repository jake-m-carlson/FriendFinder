var path = require('path');

module.exports = function (app) {

    // viewed at http://localhost:8080
app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
});

};